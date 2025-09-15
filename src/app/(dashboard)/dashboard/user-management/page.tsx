"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Trash, Pencil, Search } from "lucide-react";
import AddOrUpdateUserModal from "./add-or-update-user-modal";
import DeleteUserModal from "./delete-user-modal";
import { getUsers, deleteUser } from  "@/services/user.service";
import { getAllRoles } from "@/services/roles.service";
import { hasPermission } from "@/services/auth.service";
import { User } from "@/types/user-types";
import { Role } from "@/types/role-types";

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");

  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [userIdToEdit, setUserIdToEdit] = useState<string | null>(null);

  // permissions
  const [userCreatePerm, setUserCreatePerm] = useState(false);
  const [userEditPerm, setUserEditPerm] = useState(false);
  const [userDeletePerm, setUserDeletePerm] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await getUsers(page, limit);
      if (res?.status && Array.isArray(res.data)) {
        const transformed = res.data;
        setUsers(transformed);
        const total = res.pagination?.total ?? transformed.length;
        setTotalPages(Math.max(1, Math.ceil(total / limit)));
      } else {
        setUsers([]);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRoles = async () => {
    try {
      const res = await getAllRoles();
      if (res?.status && Array.isArray(res.data)) {
        setRoles(res.data);
      }
    } catch (err) {
      console.error("Error fetching roles:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
    const checkPermissions = async () => {
      setUserCreatePerm(await hasPermission("user:create"));
      setUserEditPerm(await hasPermission("user:update"));
      setUserDeletePerm(await hasPermission("user:delete"));
    };
    checkPermissions();
  }, [page]);

  const toggleAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(users.map((v) => v._id));
    }
    setSelectAll(!selectAll);
  };

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleEditClick = (id: string) => {
    setUserIdToEdit(id);
    setIsAddModalOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setUserIdToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (userIdToDelete) {
      try {
        await deleteUser(userIdToDelete);
        await fetchUsers();
      } catch (error) {
        console.error("Delete failed", error);
      } finally {
        setUserIdToDelete(null);
        setDeleteModalOpen(false);
      }
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setUserIdToDelete(null);
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

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(globalSearchQuery.toLowerCase())
    );
  }, [users, globalSearchQuery]);

  const paginatedUsers = filteredUsers;

  return (
    <div className="m-5 border border-gray-300 rounded-lg">
      <div className="p-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
        <h1 className="text-xl font-bold">User Management</h1>
        {userCreatePerm && (
          <Button
            className="bg-[#FF2424] mt-2 md:mt-0 hover:bg-[#FF2424]/90 text-white"
            onClick={() => {
              setUserIdToEdit(null);
              setIsAddModalOpen(true);
            }}
          >
            Add User
          </Button>
        )}
      </div>

      {/* Filters */}
      <Card className="py-2 rounded-none shadow-none border-none border-t-gray-200">
        <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search users..."
              className="pl-9 w-[250px] border-gray-200 focus:ring-2 focus:ring-[#FF2424]"
              value={globalSearchQuery}
              onChange={handleGlobalSearchChange}
            />
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="py-2 border-none shadow-none">
        <CardContent className="p-0">
          <table className="w-full table-auto">
          <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="text-left p-4 text-sm font-bold text-gray-700">
                  <Checkbox checked={selectAll} onCheckedChange={toggleAll} className="border-gray-300" />
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Name</th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Email</th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Role</th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    Loading users...
                  </td>
                </tr>
              ) : paginatedUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-4">
                      <Checkbox
                        checked={selectedRows.includes(user._id)}
                        onCheckedChange={() => toggleRow(user._id)}
                        className="border-gray-300"
                      />
                    </td>
                    <td className="p-4 text-sm font-semibold text-gray-600">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">
                      {typeof user.roleId === "string"
                        ? user.roleId
                        : user.roleId?.name}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {userEditPerm && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditClick(user._id)}
                            className="h-8 w-8 text-gray-500 hover:text-gray-700 cursor-pointer"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        )}
                        {userDeletePerm && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={() => handleDeleteClick(user._id)}
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
      <AddOrUpdateUserModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setUserIdToEdit(null);
        }}
        userIdToEdit={userIdToEdit}
        roles={roles}
        onRefresh={fetchUsers}
      />
      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDelete}
        onDelete={confirmDelete}
      />
    </div>
  );
}