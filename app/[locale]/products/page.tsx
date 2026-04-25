'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  stock: number;
  image?: string;
}

export default function ProductsPage() {
  const t = useTranslations();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('name');

  const categories = ['fruits', 'vegetables', 'herbs', 'mixes'];

  // Fetch products from Express API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Replace with your actual Express API URL
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Use mock data if API fails
        const mockProducts: Product[] = [
          {
            id: 1,
            name: 'Dried Mangoes',
            category: 'fruits',
            price: 12.99,
            description: 'Sweet and chewy dried mangoes',
            stock: 50,
          },
          {
            id: 2,
            name: 'Dried Strawberries',
            category: 'fruits',
            price: 15.99,
            description: 'Delicious freeze-dried strawberries',
            stock: 35,
          },
          {
            id: 3,
            name: 'Vegetable Mix',
            category: 'vegetables',
            price: 9.99,
            description: 'Assorted dehydrated vegetables',
            stock: 40,
          },
          {
            id: 4,
            name: 'Herb Blend',
            category: 'herbs',
            price: 8.99,
            description: 'Premium dried herb blend',
            stock: 60,
          },
          {
            id: 5,
            name: 'Fruit Mix',
            category: 'mixes',
            price: 18.99,
            description: 'Mixed dried fruits assortment',
            stock: 25,
          },
        ];
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters
  useEffect(() => {
    let result = products;

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search filter
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Price range filter
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(result);
  }, [products, searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t('products.title')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="bg-secondary rounded-lg p-6 h-fit">
            <h3 className="text-xl font-bold mb-4">{t('products.filter')}</h3>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t('products.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-bold mb-3">{t('products.category')}</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    checked={selectedCategory === 'all'}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mr-2"
                  />
                  All Categories
                </label>
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="font-bold mb-3">{t('products.priceRange')}</h4>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <p className="text-sm text-gray-600">
                  ${priceRange[0]} - ${priceRange[1]}
                </p>
              </div>
            </div>

            {/* Sort */}
            <div>
              <h4 className="font-bold mb-3">{t('products.sortBy')}</h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center h-96">
                <p>{t('common.loading')}</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="bg-secondary h-48 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                        <span className="text-gray-400">Product Image</span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                        <p className="text-xs text-gray-500 mb-3">
                          {t('products.stock')}: {product.stock}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-primary">
                            ${product.price.toFixed(2)}
                          </span>
                          <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors text-sm">
                            {t('products.addToCart')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-96">
                <p className="text-gray-600">{t('products.noResults')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
