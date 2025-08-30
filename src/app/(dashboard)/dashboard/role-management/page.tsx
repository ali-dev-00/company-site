"use client"

import React, { useEffect, useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronLeft, Trash, Pencil, Search } from "lucide-react"

import AddRoleModal from "./_components/add-role-modal"
import DeleteRoleModal from "./_components/delete-role-modal"

import { getRoles, deleteRole } from "@/services/roles.service"
import { cn } from "@/lib/utils"
import { hasPermission } from "@/services/auth.service"

interface Role {
  _id: string
  role: string
  permission: string
  status: "Active" | "Inactive"
  isToggled: boolean
}

export default function RoleManagement() {
  const [roles, setRoles] = useState<Role[]>([])
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)
  const [page, setPage] = useState(1)
  const [limit] = useState(10)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [globalSearchQuery, setGlobalSearchQuery] = useState("")

  const [roleIdToDelete, setRoleIdToDelete] = useState<string | null>(null)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [roleIdToEdit, setRoleIdToEdit] = useState<string | null>(null)

  const [filterColumn, setFilterColumn] = useState("all") // Default to "all"
  const [roleFilter, setRoleFilter] = useState<string>("")
  const [permissionFilter, setPermissionFilter] = useState<string>("")
  const [statusFilter, setStatusFilter] = useState<string>("") // Active or Inactive


  //permissions
  const [roleCreatePerm, setRoleCreatePerm] = useState<boolean>(false);
  const [roleEditPerm, setRoleEditPerm] = useState<boolean>(false);
  const [roleDeletePerm, setRoleDeletePerm] = useState<boolean>(false);

  const fetchRoles = async () => {
    setLoading(true)
    try {
      const res = await getRoles()
      if (res?.status && Array.isArray(res.data)) {
        const transformed: Role[] = res.data.map((item) => ({
          _id: item._id,
          role: item.name,
          permission: Array.isArray(item.permissions)
            ? item.permissions.join(", ")
            : "",
          status: item.status ? "Active" : "Inactive",
          isToggled: item.status ?? false,
        }))

        const start = (page - 1) * limit
        const end = start + limit
        setRoles(transformed.slice(start, end))
        setTotalPages(Math.ceil(transformed.length / limit))
      } else {
        setRoles([])
      }
    } catch (err) {
      console.error("Error fetching roles:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRoles()
    const checkPermissions = async () => {
      const hasPermissionToCreate = await hasPermission('role:create');
      const hasPermissionToEdit = await hasPermission('role:update');
      const hasPermissionToDelete = await hasPermission('role:delete');
      setRoleCreatePerm(hasPermissionToCreate);
      setRoleEditPerm(hasPermissionToEdit);
      setRoleDeletePerm(hasPermissionToDelete);
    };

    checkPermissions();
  }, [page, filterColumn, roleFilter, permissionFilter, statusFilter])

  const toggleAll = () => {
    if (selectAll) {
      setSelectedRows([])
    } else {
      setSelectedRows(roles.map((v) => v._id))
    }
    setSelectAll(!selectAll)
  }

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    )
  }

  const handleEditClick = (id: string) => {
    setRoleIdToEdit(id)
    setIsAddModalOpen(true)
  }

  const handleDelete = (id: string) => {
    setRoleIdToDelete(id)
    setDeleteModalOpen(true)
  }

  const confirmDelete = async () => {
    if (roleIdToDelete) {
      try {
        await deleteRole(roleIdToDelete)
        await fetchRoles()
      } catch (e) {
        console.error("Delete failed", e)
      } finally {
        setRoleIdToDelete(null)
        setDeleteModalOpen(false)
      }
    }
  }

  const cancelDelete = () => {
    setDeleteModalOpen(false)
    setRoleIdToDelete(null)
  }

  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage((p) => p + 1)
  }

  const handleGlobalSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalSearchQuery(event.target.value)
  }


  const filteredRoles = useMemo(() => {
    let filtered = roles.filter((role) => role.role.toLowerCase().includes(globalSearchQuery.toLowerCase()))

    if (filterColumn === "role") {
      filtered = filtered.filter((role) => role.role.toLowerCase().includes(roleFilter.toLowerCase()))
    } else if (filterColumn === "permission") {
      filtered = filtered.filter((role) => role.permission.toLowerCase().includes(permissionFilter.toLowerCase()))
    } else if (filterColumn === "status" && statusFilter) {
      filtered = filtered.filter((role) => role.status.toLowerCase() === statusFilter.toLowerCase())
    }

    return filtered
  }, [roles, globalSearchQuery, roleFilter, permissionFilter, statusFilter, filterColumn])

  const paginatedRoles = useMemo(() => {
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    return filteredRoles.slice(startIndex, endIndex)
  }, [filteredRoles, page, limit])


  return (
    <div className="m-5 border border-gray-300 rounded-lg">
      <div className="p-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
        <h1 className="text-xl font-bold">Role Management</h1>
        {roleCreatePerm && (
          <Button
            className="bg-[#FF2424] cursor-pointer mt-2 md:mt-0 hover:bg-[#FF2424]/90 text-white"
            onClick={() => {
              setRoleIdToEdit(null)
              setIsAddModalOpen(true)
            }}
          >
            Add Role
          </Button>
        )}

      </div>

      <Card className="py-2 rounded-none shadow-none border-none border-t-gray-200">
        <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder={`Search by ${filterColumn === "all" ? "any column" : filterColumn}`}
              className="pl-9 w-[250px] border-gray-200 focus:ring-2 focus:ring-[#FF2424]"
              value={globalSearchQuery}
              onChange={handleGlobalSearchChange}
            />
          </div>

          {/* Filter Dropdown */}
          <select
            value={filterColumn}
            onChange={(e) => setFilterColumn(e.target.value)}
            className="ml-4 p-2 border border-gray-300 rounded"
          >
            <option value="all">All</option>
            <option value="role">Role</option>
            <option value="permission">Permission</option>
            <option value="status">Status</option>
          </select>

          {/* Active / Inactive Filters */}
          {filterColumn === "status" && (
            <div className="ml-4 flex items-center">
              <Button
                variant="outline"
                className={`px-3 py-1 text-xs ${statusFilter === "Active" ? "bg-green-100 text-green-700" : "text-gray-500"}`}
                onClick={() => setStatusFilter("Active")}
              >
                Active
              </Button>
              <Button
                variant="outline"
                className={`px-3 py-1 text-xs ${statusFilter === "Inactive" ? "bg-red-100 text-red-700" : "text-gray-500"}`}
                onClick={() => setStatusFilter("Inactive")}
              >
                Inactive
              </Button>
            </div>
          )}
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
                <th className="text-left p-4 text-sm font-medium text-gray-700">Permission</th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Status</th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    Loading roles...
                  </td>
                </tr>
              ) : paginatedRoles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    No roles found.
                  </td>
                </tr>
              ) : (
                paginatedRoles.map((role) => (
                  <tr key={role._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 text-sm font-medium text-gray-600">
                      <Checkbox
                        checked={selectedRows.includes(role._id)}
                        onCheckedChange={() => toggleRow(role._id)}
                        className="border-gray-300"
                      />
                    </td>
                    <td className="p-4 text-sm font-semibold text-gray-600">{role.role}</td>
                    <td className="p-4 text-sm max-w-xs font-medium text-gray-600">
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(role.permission) ? (
                          role.permission.map((perm: string, idx: number) => (
                            <Badge key={idx} className="bg-white border border-gray-200 text-gray-700 rounded-md px-2 py-1 text-xs font-medium">
                              {perm}
                            </Badge>
                          ))
                        ) : (
                          role.permission.split(",").map((perm: string, idx: number) => (
                            <Badge key={idx} className="bg-white border border-gray-200 text-gray-700 rounded-md px-2 py-1 text-xs font-medium">
                              {perm.trim()}
                            </Badge>
                          ))
                        )}
                      </div>
                    </td>

                    <td className="p-4 text-sm font-medium text-gray-600">
                      <div className="flex items-center gap-3">
                        <Badge className={cn("px-2 py-1 rounded-full text-xs font-medium", role.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}>
                          <span className={cn("inline-block w-2 h-2 rounded-full mr-1", role.status === "Active" ? "bg-green-500" : "bg-red-500")} />
                          {role.status}
                        </Badge>
                      </div>
                    </td>
                    <td className="p-4 text-sm font-medium text-gray-600">

                      <div className="flex items-center gap-2">
                        {roleDeletePerm && (
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleDelete(role._id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        )}
                        {roleEditPerm && (
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => handleEditClick(role._id)}>
                            <Pencil className="h-4 w-4" />
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

      <div className="flex overflow-x-auto items-center justify-between p-6">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={page === 1}
          className="flex items-center gap-2 border-gray-200 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>

        <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>

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

      <AddRoleModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setRoleIdToEdit(null); // Sirf modal band karo aur ID reset karo
        }}
        roleIdToEdit={roleIdToEdit}
        onRefresh={fetchRoles} // Refresh function yahan se pass karo
      />

      <DeleteRoleModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDelete}
        onDelete={confirmDelete}
      />
    </div>
  )
}
