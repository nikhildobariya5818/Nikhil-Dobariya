export async function getProductData() {
  try {
    const response = await fetch('/data/products.json', {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('[v0] Error loading products:', error);
    return {};
  }
}

export async function getCategoriesData() {
  try {
    const response = await fetch('/data/categories.json', {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
    if (!response.ok) throw new Error('Failed to fetch categories');
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('[v0] Error loading categories:', error);
    return [];
  }
}

export async function getProductById(id: string) {
  const products = await getProductData();
  return products[id] || null;
}

export async function getCategoryById(id: string) {
  const categories = await getCategoriesData();
  return categories.find((cat: any) => cat.id === id) || null;
}

export async function getRelatedProducts(categoryId: string) {
  const category = await getCategoryById(categoryId);
  if (!category || !category.products) return [];
  
  const products = await getProductData();
  return category.products
    .map((productId: string) => ({
      id: productId,
      ...products[productId],
    }))
    .filter(Boolean);
}
