import fs from 'fs';
import path from 'path';

// Map of old routes to new routes
const routeMap = {
  'ProductsList': 'products',
  'About': 'about-us',
  'QualityCertifications': 'quality',
  'Infrastructure': 'infrastructure',
  'JobWork': 'job-work',
  'ExportSolutions': 'export-solutions',
  'RequestQuote': 'request-quote',
  'Contact': 'contact',
  'CategoryDetail': 'category/[id]',
  'ProductDetail': 'product/[id]'
};

// Read all page files from src/pages
const srcPagesDir = './src/pages';
const appDir = './app';

const files = fs.readdirSync(srcPagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const fileName = file.replace('.tsx', '');
  const srcPath = path.join(srcPagesDir, file);
  let content = fs.readFileSync(srcPath, 'utf-8');

  // Replace React Router imports with Next.js
  content = content.replace(/import\s+{\s*Link\s*,\s*NavLink\s*}\s+from\s+'react-router-dom'/g, "import Link from 'next/link'");
  content = content.replace(/import\s+{\s*Link\s*}\s+from\s+'react-router-dom'/g, "import Link from 'next/link'");
  content = content.replace(/import\s+{\s*useParams\s*}\s+from\s+'react-router-dom'/g, "import { useParams } from 'next/navigation'");
  
  // Replace NavLink with Link and handle active state
  content = content.replace(/NavLink\s+to=/g, 'Link href=');
  content = content.replace(/to=/g, 'href=');
  
  // Add 'use client' directive for client components
  if (content.includes('motion') || content.includes('useState') || content.includes('useEffect')) {
    content = "'use client';\n\n" + content;
  }

  // Determine the destination directory and file
  let destDir, destFile;
  
  if (fileName === 'CategoryDetail') {
    destDir = path.join(appDir, 'category', '[id]');
    destFile = 'page.tsx';
  } else if (fileName === 'ProductDetail') {
    destDir = path.join(appDir, 'product', '[id]');
    destFile = 'page.tsx';
  } else {
    const routeName = routeMap[fileName] || fileName.toLowerCase();
    destDir = path.join(appDir, routeName);
    destFile = 'page.tsx';
  }

  // Create directories if they don't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Write the converted file
  const destPath = path.join(destDir, destFile);
  fs.writeFileSync(destPath, content);
  console.log(`✓ Migrated ${file} to ${destPath}`);
});

console.log('✓ Page migration complete!');
