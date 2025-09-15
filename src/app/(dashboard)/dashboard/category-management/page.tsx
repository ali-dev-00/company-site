"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronLeft, Trash, Pencil, Search } from "lucide-react";

import AddOrUpdateCategoryModal from "./_components/add-or-update-category-modal";
import DeleteCategoryModal from "./_components/delete-category";


import { cn } from "@/lib/utils";
import { hasPermission } from "@/services/auth.service";
import { Category } from "@/types/category-types";
import { deleteCategory, getCategories } from "@/services/category.service";

export default function CategoryManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");

  const [categoryIdToDelete, setCategoryIdToDelete] = useState<string | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [categoryIdToEdit, setCategoryIdToEdit] = useState<string | null>(null);

  // permissions
  const [categoryCreatePerm, setCategoryCreatePerm] = useState(false);
  const [categoryEditPerm, setCategoryEditPerm] = useState(false);
  const [categoryDeletePerm, setCategoryDeletePerm] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await getCategories(page, limit);
      if (res?.status && Array.isArray(res.data)) {
        const transformed: Category[] = res.data.map((item) => ({
          _id: item._id,
          name: item.name,
          status: item.status,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }));
        setCategories(transformed);
        const total = res.pagination?.total ?? transformed.length;
        setTotalPages(Math.max(1, Math.ceil(total / limit)));
      } else {
        setCategories([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    const checkPermissions = async () => {
      setCategoryCreatePerm(await hasPermission("category:create"));
      setCategoryEditPerm(await hasPermission("category:update"));
      setCategoryDeletePerm(await hasPermission("category:delete"));
    };
    checkPermissions();
  }, [page]);

  const toggleAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(categories.map((v) => v._id));
    }
    setSelectAll(!selectAll);
  };

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleEditClick = (id: string) => {
    setCategoryIdToEdit(id);
    setIsAddModalOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setCategoryIdToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (categoryIdToDelete) {
      try {
        await deleteCategory(categoryIdToDelete);
        await fetchCategories();
      } catch (error) {
        console.error("Delete failed", error);
      } finally {
        setCategoryIdToDelete(null);
        setDeleteModalOpen(false);
      }
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setCategoryIdToDelete(null);
  };

  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((p) => p + 1);
  };

  const handleGlobalSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalSearchQuery(event.target.value);
  };

  const filteredCategories = useMemo(() => {
    return categories.filter((cat) =>
      cat.name.toLowerCase().includes(globalSearchQuery.toLowerCase())
    );
  }, [categories, globalSearchQuery]);

  // Server returns a single page; after local search, show filtered of current page
  const paginatedCategories = filteredCategories;

  return (
    <div className="m-5 border border-gray-300 rounded-lg">
      <div className="p-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
        <h1 className="text-xl font-bold">Category Management</h1>
        {categoryCreatePerm && (
          <Button
            className="bg-[#FF2424] cursor-pointer mt-2 md:mt-0 hover:bg-[#FF2424]/90 text-white"
            onClick={() => {
              setCategoryIdToEdit(null);
              setIsAddModalOpen(true);
            }}
          >
            Add Category
          </Button>
        )}
      </div>

      {/* Filters */}
      <Card className="py-2 rounded-none shadow-none border-none border-t-gray-200">
        <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search categories..."
              className="pl-9 w-[250px] border-gray-200 focus:ring-2 focus:ring-[#FF2424]"
              value={globalSearchQuery}
              onChange={handleGlobalSearchChange}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="py-2 border-none shadow-none">
        <CardContent className="p-0">
         
            <table className="w-full table-auto">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">
                    <Checkbox checked={selectAll} onCheckedChange={toggleAll} className="border-gray-300" />
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-700">Role</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-700">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-500">
                    Loading categories...
                  </td>
                </tr>
              ) : paginatedCategories.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-500">
                    No categories found.
                  </td>
                </tr>
              ) : (
                paginatedCategories.map((cat) => (
                  <tr
                    key={cat._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-4">
                      <Checkbox
                        checked={selectedRows.includes(cat._id)}
                        onCheckedChange={() => toggleRow(cat._id)}
                        className="border-gray-300"
                      />
                    </td>
                    <td className="p-4 font-semibold">{cat.name}</td>
                    <td className="p-4">
                      <Badge
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          cat.status
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        )}
                      >
                        {cat.status ? "Active" : "Inactive"}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {categoryEditPerm && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={() => handleEditClick(cat._id)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        )}
                        {categoryDeletePerm && (
                          <Button
                            variant="ghost"
                            size="icon"
                             className="h-8 w-8 text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={() => handleDeleteClick(cat._id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between p-6">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={page === 1}
          className="flex items-center gap-2 border-gray-200 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <div className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </div>
        <Button
          variant="outline"
          onClick={handleNext}
          disabled={page === totalPages}
          className="flex items-center gap-2 border-gray-200 bg-transparent"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      {/* Modals */}
      <AddOrUpdateCategoryModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setCategoryIdToEdit(null);
        }}
        categoryIdToEdit={categoryIdToEdit}
        onRefresh={fetchCategories}
      />
      <DeleteCategoryModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDelete}
        onDelete={confirmDelete}
      />
    </div>
  );
}