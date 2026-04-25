'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface Order {
  id: number;
  customerName: string;
  email: string;
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  date: string;
  itemCount: number;
}

export default function AdminOrdersPage() {
  const t = useTranslations();
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      customerName: 'John Doe',
      email: 'john@example.com',
      total: 45.99,
      status: 'completed',
      date: '2024-01-15',
      itemCount: 3,
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      email: 'jane@example.com',
      total: 89.50,
      status: 'processing',
      date: '2024-01-20',
      itemCount: 5,
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      email: 'bob@example.com',
      total: 34.99,
      status: 'pending',
      date: '2024-01-22',
      itemCount: 2,
    },
  ]);

  const updateOrderStatus = (id: number, status: Order['status']) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{t('admin.orders')}</h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Order ID</th>
              <th className="px-6 py-4 text-left font-bold">Customer</th>
              <th className="px-6 py-4 text-left font-bold">Items</th>
              <th className="px-6 py-4 text-left font-bold">Total</th>
              <th className="px-6 py-4 text-left font-bold">Status</th>
              <th className="px-6 py-4 text-left font-bold">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-bold">#{order.id}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-bold">{order.customerName}</p>
                    <p className="text-sm text-gray-600">{order.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{order.itemCount}</td>
                <td className="px-6 py-4 font-bold">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                    className={`px-4 py-2 rounded-lg font-bold ${getStatusColor(order.status)} border-none cursor-pointer`}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="px-6 py-4">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
