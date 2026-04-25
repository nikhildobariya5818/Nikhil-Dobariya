import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Map of old pages to new routes
const routeMap = {
  'About': { route: 'about-us', type: 'simple' },
  'ProductsList': { route: 'products', type: 'simple' },
  'QualityCertifications': { route: 'quality', type: 'simple' },
  'Infrastructure': { route: 'infrastructure', type: 'simple' },
  'JobWork': { route: 'job-work', type: 'simple' },
  'ExportSolutions': { route: 'export-solutions', type: 'simple' },
  'RequestQuote': { route: 'request-quote', type: 'simple' },
  'Contact': { route: 'contact', type: 'simple' },
  'CategoryDetail': { route: 'category/[id]', type: 'dynamic' },
  'ProductDetail': { route: 'product/[id]', type: 'dynamic' }
};

const srcPagesDir = path.join(__dirname, '../src/pages');
const appDir = path.join(__dirname, '../app');

// Utility function to convert imports
function convertImports(content) {
  // Replace React Router imports with Next.js
  content = content.replace(/import\s*{\s*Link\s*,\s*NavLink\s*}\s*from\s*['"]react-router-dom['"]/g, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation'");
  content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"]/g, "import Link from 'next/link'");
  content = content.replace(/import\s*{\s*useParams\s*}\s*from\s*['"]react-router-dom['"]/g, "import { useParams } from 'next/navigation'");
  
  // Replace router imports if they exist
  content = content.replace(/import\s*{\s*useNavigate\s*}\s*from\s*['"]react-router-dom['"]/g, "import { useRouter } from 'next/navigation'");
  
  // Replace to= with href=
  content = content.replace(/\sNavLink\s+to=/g, ' Link href=');
  content = content.replace(/\sto=/g, ' href=');
  
  return content;
}

// Add use client directive if needed
function addUseClientDirective(content) {
  if ((content.includes("'use client'") || content.includes('"use client"'))) {
    return content;
  }
  
  if (content.includes('motion') || content.includes('useState') || content.includes('useEffect') || content.includes('useRouter') || content.includes('useParams') || content.includes('usePathname')) {
    return "'use client';\n\n" + content;
  }
  
  return content;
}

// Create wrapper with layout components
function wrapWithLayoutComponents(content, pageName) {
  // Only wrap pages that likely need the full layout
  const simpleWrapPages = ['ProductsList', 'About', 'QualityCertifications', 'Infrastructure', 'JobWork', 'ExportSolutions', 'RequestQuote', 'Contact'];
  
  if (simpleWrapPages.includes(pageName) && !content.includes('Navbar')) {
    const importStatements = `import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import WhatsAppButton from '@/app/components/WhatsAppButton';\n\n`;
    
    // Add imports at the top
    const firstImportIndex = content.indexOf('import');
    if (firstImportIndex !== -1) {
      content = content.substring(0, firstImportIndex) + importStatements + content.substring(firstImportIndex);
    } else {
      content = importStatements + content;
    }

    // Wrap export default with layout
    content = content.replace(/export\s+default\s+function\s+(\w+)\(\)\s*{/, (match, funcName) => {
      return match + '\n  return (\n    <>\n      <ScrollToTop />\n      <Navbar />\n      <main className="flex-grow pt-20">';
    });
    
    content = content.replace(/^(\s*)}\s*$/m, (match) => {
      return '\n      </main>\n      <Footer />\n      <WhatsAppButton />\n    </>\n  );\n}';
    });
  }
  
  return content;
}

// Process all pages
const files = fs.readdirSync(srcPagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const fileName = file.replace('.tsx', '');
  const srcPath = path.join(srcPagesDir, file);
  
  if (!fs.existsSync(srcPath)) return;
  
  let content = fs.readFileSync(srcPath, 'utf-8');
  
  // Skip if already migrated
  const routeInfo = routeMap[fileName];
  if (!routeInfo) {
    console.log(`⊘ Skipped ${file} (no route mapping)`);
    return;
  }
  
  // Convert imports and add directives
  content = convertImports(content);
  content = addUseClientDirective(content);
  content = wrapWithLayoutComponents(content, fileName);
  
  // Create destination directory
  let destDir = path.join(appDir, routeInfo.route);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  const destPath = path.join(destDir, 'page.tsx');
  fs.writeFileSync(destPath, content);
  console.log(`✓ Migrated ${file} → ${routeInfo.route}/page.tsx`);
});

console.log('\n✓ All pages migrated successfully!');
