"use client";

import { useEffect, useState } from "react";
import { IProduct } from "@/models/Product";
import { apiClient } from "@/lib/api-client";
import { Loader2, Plus, Edit2, Trash2 } from "lucide-react";
import AdminProductForm from "@/components/AdminProductForm";
import { toast } from "react-hot-toast";

export default function AdminPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);

  const fetchProducts = async () => {
    try {
      const data = await apiClient.getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (productId: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await apiClient.deleteProduct(productId);
      toast.success("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold dark:text-gray-200 text-gray-800">Admin Dashboard</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add New Product
        </button>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold dark:text-gray-200 text-gray-800">Add New Product</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="btn btn-ghost btn-sm"
              >
                ✕
              </button>
            </div>
            <AdminProductForm onSuccess={() => {
              setShowAddForm(false);
              fetchProducts();
            }} />
          </div>
        </div>
      )}

      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold dark:text-gray-200 text-gray-800">Edit Product</h2>
              <button
                onClick={() => setEditingProduct(null)}
                className="btn btn-ghost btn-sm"
              >
                ✕
              </button>
            </div>
            <AdminProductForm
              product={editingProduct}
              onSuccess={() => {
                setEditingProduct(null);
                fetchProducts();
              }}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
          >
            <figure className="relative h-48">
              <img
                src={`${process.env.NEXT_PUBLIC_URL_ENDPOINT}${product.imageUrl}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => setEditingProduct(product)}
                  className="btn btn-circle btn-sm bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-circle btn-sm bg-white dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title dark:text-gray-200 text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {product.description}
              </p>
              <div className="mt-4">
                <h3 className="font-semibold mb-2 dark:text-gray-200 text-gray-800">Variants:</h3>
                <div className="space-y-2">
                  {product.variants.map((variant, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded"
                    >
                      <span className="dark:text-gray-200 text-gray-800">
                        {variant.type} - {variant.license}
                      </span>
                      <span className="font-semibold dark:text-gray-200 text-gray-800">
                        ${variant.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
