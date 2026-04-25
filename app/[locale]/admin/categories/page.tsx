'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
  productCount: number;
}

export default function AdminCategoriesPage() {
  const t = useTranslations();
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Fruits', description: 'Dried fruits', productCount: 5 },
    { id: 2, name: 'Vegetables', description: 'Dried vegetables', productCount: 3 },
    { id: 3, name: 'Herbs', description: 'Dried herbs', productCount: 8 },
    { id: 4, name: 'Mixes', description: 'Mixed dehydrated products', productCount: 2 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const category: Category = {
      id: Date.now(),
      name: newCategory.name,
      description: newCategory.description,
      productCount: 0,
    };
    setCategories([...categories, category]);
    setNewCategory({ name: '', description: '' });
    setShowForm(false);
  };

  const handleDeleteCategory = (id: number) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t('admin.categories')}</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus size={20} />
          Add Category
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">Add Category</h2>
            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Category Name</label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Description</label>
                <textarea
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-4 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Category Name</th>
              <th className="px-6 py-4 text-left font-bold">Description</th>
              <th className="px-6 py-4 text-left font-bold">Products</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-bold">{category.name}</td>
                <td className="px-6 py-4">{category.description}</td>
                <td className="px-6 py-4">{category.productCount}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                    <Edit2 size={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
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
