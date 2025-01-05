"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FileUpload from "./FileUpload";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { Loader2, Plus, Trash2 } from "lucide-react"; 
import { IMAGE_VARIANTS, ImageVariantType } from "@/models/Product";
import { apiClient, ProductFormData } from "@/lib/api-client";
import toast from "react-hot-toast";

export default function AdminProductForm() {
  const [loading, setLoading] = useState(false); 

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
      variants: [
        {
          type: "SQUARE" as ImageVariantType,
          price: 9.99,
          license: "personal",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  const handleUploadSuccess = (response: IKUploadResponse) => {
    setValue("imageUrl", response.filePath);
    toast.success("Image uploaded successfully!");
  };

  const onSubmit = async (data: ProductFormData) => {
    setLoading(true);
    try {
      await apiClient.createProduct(data);
      toast.success("Product created successfully!");

      // Reset form after successful submission
      setValue("name", "");
      setValue("description", "");
      setValue("imageUrl", "");
      setValue("variants", [
        {
          type: "SQUARE" as ImageVariantType,
          price: 9.99,
          license: "personal",
        },
      ]);
    } catch (error) {
      toast.error("Failed to create product");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="form-control ">
        <label className="label">Product Name</label>
        <input
          type="text"
          className={`p-2 rounded-md outline-none  dark:text-gray-200 text-gray-800 bg-gray-200 dark:bg-gray-800 ${errors.name ? "input-error" : ""}`}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="text-error text-sm mt-1">{errors.name.message}</span>
        )}
      </div>

      <div className="form-control">
        <label className="label">Description</label>
        <textarea
          className={`textarea h-24 p-2 rounded-md outline-none  dark:text-gray-200 text-gray-800 bg-gray-200 dark:bg-gray-800 ${
            errors.description ? "textarea-error" : ""
          }`}
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <span className="text-error text-sm mt-1">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">Product Image</label>
        <FileUpload onSuccess={handleUploadSuccess} />
      </div>

      <div className="divider">Image Variants</div>

      {fields.map((field, index) => (
        <div key={field.id} className="card  rounded-md outline-none  dark:text-gray-200 text-gray-800 bg-gray-200 dark:bg-gray-800 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="form-control">
              <label className="label">Size & Aspect Ratio</label>
              <select
                className="select  select-bordered  p-2 rounded-md outline-none  dark:text-gray-200 text-gray-800 bg-gray-200 dark:bg-gray-700"
                {...register(`variants.${index}.type`)}
              >
                {Object.entries(IMAGE_VARIANTS).map(([key, value]) => (
                  <option key={key} value={value.type}>
                    {value.label} ({value.dimensions.width}x
                    {value.dimensions.height})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">License</label>
              <select
                className="select select-bordered p-2 rounded-md outline-none  dark:text-gray-200 text-gray-800 bg-gray-200 dark:bg-gray-800"
                {...register(`variants.${index}.license`)}
              >
                <option value="personal">Personal Use</option>
                <option value="commercial">Commercial Use</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">Price ($)</label>
              <input
                type="number"
                step="0.01"
                min="0.01"
                className="border border-gray-700 appearance-none p-2 rounded-md outline-none  dark:text-gray-200 text-gray-800 bg-gray-200 dark:bg-gray-800"
                {...register(`variants.${index}.price`, {
                  valueAsNumber: true,
                  required: "Price is required",
                  min: { value: 0.01, message: "Price must be greater than 0" },
                })}
              />
              {errors.variants?.[index]?.price && (
                <span className="text-error text-sm mt-1">
                  {errors.variants[index]?.price?.message}
                </span>
              )}
            </div>

            <div className="flex items-end">
              <button
                type="button"
                className="btn btn-error btn-sm"
                onClick={() => remove(index)}
                disabled={fields.length === 1}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-outline btn-block"
        onClick={() =>
          append({
            type: "SQUARE" as ImageVariantType,
            price: 9.99,
            license: "personal",
          })
        }
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Variant
      </button>

      <button
        type="submit"
        className="btn bg-red-500 hover:bg-red-600 text-white border-0 btn-block"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Creating Product...
          </>
        ) : (
          "Create Product"
        )}
      </button>
    </form>
  );
}
