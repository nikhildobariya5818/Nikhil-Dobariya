'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Save } from 'lucide-react';

interface PricingTier {
  id: number;
  name: string;
  minQuantity: number;
  discount: number;
}

export default function AdminPricingPage() {
  const t = useTranslations();
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([
    { id: 1, name: 'Standard', minQuantity: 1, discount: 0 },
    { id: 2, name: 'Bulk 10+', minQuantity: 10, discount: 5 },
    { id: 3, name: 'Bulk 50+', minQuantity: 50, discount: 10 },
    { id: 4, name: 'Wholesale 100+', minQuantity: 100, discount: 15 },
  ]);

  const handleTierChange = (id: number, field: string, value: any) => {
    setPricingTiers(
      pricingTiers.map((tier) =>
        tier.id === id ? { ...tier, [field]: value } : tier
      )
    );
  };

  const handleSave = () => {
    alert('Pricing tiers updated successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{t('admin.pricing')}</h1>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Dynamic Pricing Tiers</h2>

        <div className="space-y-4">
          {pricingTiers.map((tier) => (
            <div key={tier.id} className="grid grid-cols-4 gap-4 items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-bold mb-2">Tier Name</label>
                <input
                  type="text"
                  value={tier.name}
                  onChange={(e) => handleTierChange(tier.id, 'name', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Minimum Quantity</label>
                <input
                  type="number"
                  value={tier.minQuantity}
                  onChange={(e) => handleTierChange(tier.id, 'minQuantity', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Discount (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={tier.discount}
                  onChange={(e) => handleTierChange(tier.id, 'discount', parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <p className="text-sm text-gray-600">Effective Discount</p>
                <p className="text-2xl font-bold text-primary">{tier.discount}%</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold mb-2">How Dynamic Pricing Works:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Prices automatically adjust based on order quantity</li>
            <li>Larger bulk orders receive higher discounts</li>
            <li>Customers see the discount applied at checkout</li>
            <li>Seasonal adjustments can be made anytime</li>
          </ul>
        </div>

        <button
          onClick={handleSave}
          className="mt-8 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Save size={20} />
          Save Pricing Configuration
        </button>
      </div>
    </div>
  );
}
