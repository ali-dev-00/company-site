"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Toast from "@/components/ui/toast";

import { Role } from "@/types/role-types";
import { createUser, getUserById, updateUser } from "@/services/user.service";
import { CreateUserDto, UpdateUserDto } from "@/types/user-types";


type AddOrUpdateUserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  userIdToEdit?: string | null;
  roles: Role[];
  onRefresh: () => void;
};

export default function AddOrUpdateUserModal({
  isOpen,
  onClose,
  userIdToEdit,
  roles,
  onRefresh,
}: AddOrUpdateUserModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [toastKey, setToastKey] = useState(0);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setToastKey((k) => k + 1);
  };

  const isEditMode = !!userIdToEdit;

  const loadUser = useCallback(async (id: string) => {
    setFormLoading(true);
    try {
      const res = await getUserById(id);
      if (res && res.status && res.data) {
        setName(res.data.name);
        setEmail(res.data.email);
        setRoleId(typeof res.data.roleId === "string" ? res.data.roleId : res.data.roleId?._id);
      } else {
        showToast("error", res?.message || "Failed to load user data");
      }
    } finally {
      setFormLoading(false);
    }
  }, []); // Empty dependency array ensures that loadUser is not redefined

  useEffect(() => {
    if (isOpen) {
      if (isEditMode && userIdToEdit) {
        loadUser(userIdToEdit);
      } else {
        resetForm();
      }
    }
  }, [isOpen, isEditMode, userIdToEdit, loadUser]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRoleId("");
    setFormError(null);
  };
  const handleSave = async () => {
    setFormError(null);

    // Ensure all required fields are filled
    if (!name.trim() || !email.trim() || (!isEditMode && !password.trim()) || !roleId) {
      setFormError("All fields are required.");
      return;
    }

    setLoading(true);
    try {

      const payload: CreateUserDto | UpdateUserDto = {
        name,
        email,
        roleId,
        password: isEditMode ? undefined : password,
      };

      const res = isEditMode && userIdToEdit
        ? await updateUser(userIdToEdit, payload as UpdateUserDto)
        : await createUser(payload as CreateUserDto);

      if (res && res.status) {
        showToast("success", res.message || "User saved successfully");
        onRefresh();
        onClose();
      } else {
        setFormError(res?.message || "Error saving user");
      }
    } catch {
      setFormError("Error saving user.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {toast && <Toast key={toastKey} message={toast.message} type={toast.type} />}
      <DialogContent className="sm:max-w-[600px] p-0 bg-white overflow-hidden rounded-md">
        <DialogHeader className="p-4 border-b border-gray-300">
          <DialogTitle>{isEditMode ? "Edit User" : "Add User"}</DialogTitle>
        </DialogHeader>
        {formLoading ? (
          <div className="p-10 text-center">Loading...</div>
        ) : (
          <>
            <div className="p-5 space-y-4">
              <div>
                <Label>Name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label>Email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isEditMode ? "Leave blank to keep current password" : ""}
                />
              </div>
              <div>
                <Label>Role</Label>
                <select
                  value={roleId}
                  onChange={(e) => setRoleId(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm border-gray-300"
                >
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role._id} value={role._id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              {formError && <p className="text-red-500 text-xs mt-1">{formError}</p>}
            </div>
            <DialogFooter className="p-4 border-t border-gray-300 flex justify-end">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={loading} className="bg-[#FF2424] text-white">
                {loading ? (isEditMode ? "Updating..." : "Saving...") : isEditMode ? "Update" : "Save"}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
