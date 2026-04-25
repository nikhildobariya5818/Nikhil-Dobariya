# Dehydra - Next.js Multi-Language E-Commerce Platform

A modern, fully-featured e-commerce platform built with Next.js 15, featuring multi-language support (English, Hindi, Spanish), dynamic products, admin panel, and complete SEO optimization.

## Features

### Core Features
- **Multi-Language Support**: Native internationalization with English, Hindi, and Spanish using next-intl
- **Dynamic Product System**: Browse, filter, and search products with real-time updates
- **Admin Panel**: Complete product, category, order, and pricing management
- **Dynamic Pricing**: Volume-based discount tiers for bulk orders
- **Order Management**: Track and manage customer orders with status updates

### Technical Features
- **SEO Optimized**: XML sitemaps, robots.txt, meta tags, structured data (JSON-LD)
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **API Integration**: Seamless integration with Express backend API
- **Performance**: Next.js optimizations with ISR and caching

## Project Structure

```
app/
├── [locale]/              # Locale-based routing
│   ├── layout.tsx         # Locale layout wrapper
│   ├── page.tsx           # Home page
│   ├── products/          # Product listing and details
│   ├── admin/             # Admin dashboard
│   ├── about/             # About page
│   └── contact/           # Contact page
├── api/                   # API routes
│   └── products/          # Product API endpoints
├── layout.tsx             # Root layout
└── globals.css            # Global styles

components/
├── Navbar.tsx             # Navigation component
├── Footer.tsx             # Footer component
└── AdminSidebar.tsx       # Admin panel sidebar

lib/
├── seo.config.ts          # SEO configuration
└── structured-data.ts     # JSON-LD schema generators

messages/
├── en.json                # English translations
├── hi.json                # Hindi translations
└── es.json                # Spanish translations
```

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Express API server running (default: http://localhost:5000)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd dehydra-export-nextjs
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Configure environment variables**
```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Edit .env.local and set your API URL
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4. **Run the development server**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

5. **Open in browser**
Navigate to [http://localhost:3000/en](http://localhost:3000/en)

## Available Routes

### Public Routes
- `/:locale` - Home page
- `/:locale/products` - Product listing with filters
- `/:locale/products/[id]` - Product details
- `/:locale/about` - About page
- `/:locale/contact` - Contact page

### Admin Routes
- `/:locale/admin` - Product management
- `/:locale/admin/categories` - Category management
- `/:locale/admin/orders` - Order management
- `/:locale/admin/pricing` - Dynamic pricing configuration

### API Routes
- `/api/products` - Get/create products
- `/api/products/[id]` - Get/update/delete specific product
- `/api/orders` - Get/create orders

## Supported Languages

- **English** (`/en`)
- **Hindi** (`/hi`)
- **हिन्दी** 
- **Spanish** (`/es`)
- **Español**

Language switching is available in the navbar and persists across navigation.

## API Integration

### Express Backend Requirements

The application expects an Express API at the configured URL with the following endpoints:

#### Products
```
GET    /api/products           # Get all products
POST   /api/products           # Create product
GET    /api/products/:id       # Get product details
PUT    /api/products/:id       # Update product
DELETE /api/products/:id       # Delete product
```

#### Orders
```
GET    /api/orders             # Get all orders
POST   /api/orders             # Create order
GET    /api/orders/:id         # Get order details
PUT    /api/orders/:id         # Update order
```

### Product Data Structure
```typescript
{
  id: number;
  name: string;
  category: string;      // 'fruits', 'vegetables', 'herbs', 'mixes'
  price: number;
  description: string;
  stock: number;
  image?: string;        // Optional image URL
  specifications?: Record<string, string>;
}
```

## Building for Production

1. **Build the application**
```bash
npm run build
```

2. **Start the production server**
```bash
npm run start
```

## SEO Configuration

### Update for Your Domain
Edit `lib/seo.config.ts` and `app/sitemap.ts` to update:
- Domain URL (e.g., https://yourdomain.com)
- Social media handles
- Contact information

### Sitemaps
- `/sitemap.xml` - Auto-generated sitemap
- `public/robots.txt` - Robot rules

## Multi-Language Implementation

The application uses `next-intl` for internationalization:

### Adding New Languages
1. Create `messages/[lang].json` with translations
2. Update `i18n.config.ts` to include the new language
3. Update middleware routing if needed

### Translation Keys
All translation keys are organized in `messages/*.json` files:
- `nav.*` - Navigation items
- `home.*` - Home page content
- `products.*` - Product page content
- `admin.*` - Admin panel content
- `common.*` - Shared translations

## Dynamic Pricing

The admin panel includes dynamic pricing configuration:
- **Standard Tier**: No discount (1+ items)
- **Bulk 10+**: 5% discount
- **Bulk 50+**: 10% discount
- **Wholesale 100+**: 15% discount

Adjust these tiers in `/admin/pricing` page.

## Customization

### Colors
Edit `tailwind.config.js` to customize:
- Primary color (default: blue)
- Secondary color (default: light gray)
- Accent color (default: pink)

### Fonts
Update `app/globals.css` to change typography.

### Theme
Modify design tokens in Tailwind config for consistent theming.

## Troubleshooting

### API Connection Issues
1. Ensure Express API is running on the configured port
2. Check `NEXT_PUBLIC_API_URL` in `.env.local`
3. Verify API endpoint responses in browser DevTools

### Language Not Switching
1. Clear browser cache
2. Check `middleware.ts` routing configuration
3. Verify language code is in `i18n.config.ts`

### Products Not Loading
1. Check network tab for API errors
2. Verify Express API is responding
3. Check browser console for error messages

## Deployment

### Vercel Deployment
1. Push to GitHub
2. Import project in Vercel
3. Set environment variable: `NEXT_PUBLIC_API_URL`
4. Deploy

### Other Platforms
The application can be deployed to any platform supporting Next.js:
- Self-hosted server
- Docker container
- AWS, Google Cloud, Azure

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and support:
- Email: support@dehydra.com
- Phone: +1 (555) 123-4567

---

Built with Next.js, React, Tailwind CSS, and next-intl
