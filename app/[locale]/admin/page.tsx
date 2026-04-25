'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Trash2, Edit2, Plus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  stock: number;
}

interface FormData {
  name: string;
  category: string;
  price: string;
  description: string;
  stock: string;
}

export default function AdminProductsPage() {
  const t = useTranslations();
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    category: 'fruits',
    price: '',
    description: '',
    stock: '',
  });
  const [loading, setLoading] = useState(true);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Try to fetch from Express API
        const response = await fetch('http://localhost:5000/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          // Use mock data
          setProducts([
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
              name: 'Vegetable Mix',
              category: 'vegetables',
              price: 9.99,
              description: 'Assorted dehydrated vegetables',
              stock: 40,
            },
          ]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([
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
            name: 'Vegetable Mix',
            category: 'vegetables',
            price: 9.99,
            description: 'Assorted dehydrated vegetables',
            stock: 40,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddClick = () => {
    setEditingId(null);
    setFormData({
      name: '',
      category: 'fruits',
      price: '',
      description: '',
      stock: '',
    });
    setShowForm(true);
  };

  const handleEditClick = (product: Product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      description: product.description,
      stock: product.stock.toString(),
    });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: editingId || Date.now(),
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      description: formData.description,
      stock: parseInt(formData.stock),
    };

    try {
      if (editingId) {
        // Update existing product
        const response = await fetch(`http://localhost:5000/api/products/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct),
        });

        if (response.ok) {
          setProducts(
            products.map((p) => (p.id === editingId ? newProduct : p))
          );
        }
      } else {
        // Add new product
        const response = await fetch('http://localhost:5000/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct),
        });

        if (response.ok) {
          setProducts([...products, newProduct]);
        } else {
          // Fallback if API fails
          setProducts([...products, newProduct]);
        }
      }

      setShowForm(false);
      setFormData({
        name: '',
        category: 'fruits',
        price: '',
        description: '',
        stock: '',
      });
    } catch (error) {
      console.error('Error saving product:', error);
      // Fallback to local update
      if (editingId) {
        setProducts(
          products.map((p) => (p.id === editingId ? newProduct : p))
        );
      } else {
        setProducts([...products, newProduct]);
      }
      setShowForm(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
      });

      if (response.ok || response.status === 404) {
        setProducts(products.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      // Fallback to local deletion
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  if (loading) {
    return <div className="text-center py-8">{t('common.loading')}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t('admin.products')}</h1>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus size={20} />
          {t('admin.addProduct')}
        </button>
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">
              {editingId ? t('admin.editProduct') : t('admin.addProduct')}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Product Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="herbs">Herbs</option>
                    <option value="mixes">Mixes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Price</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Stock</label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-4 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {t('admin.cancel')}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {t('admin.save')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Product Name</th>
              <th className="px-6 py-4 text-left font-bold">Category</th>
              <th className="px-6 py-4 text-left font-bold">Price</th>
              <th className="px-6 py-4 text-left font-bold">Stock</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4 capitalize">{product.category}</td>
                <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Edit2 size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
