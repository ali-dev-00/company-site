'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Toast from '@/components/ui/toast';
import { SimpleMultiSelect, Option as SelectOption } from '@/components/ui/multi-select';
import { createRole, updateRole, getRoleById } from '@/services/roles.service';
import { Permission } from '@/types/permissions';

const permissionOptions: SelectOption[] = Object.values(Permission).map((permissionValue) => ({
  label: permissionValue.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
  value: permissionValue,
}));

type AddRoleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  roleIdToEdit?: string | null;
  onRefresh: () => void;
};

export default function AddRoleModal({
  isOpen,
  onClose,
  roleIdToEdit,
  onRefresh,
}: AddRoleModalProps) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(true);
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null); // ✅ NEW STATE
  const isEditMode = !!roleIdToEdit;

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [toastKey, setToastKey] = useState(0);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setToastKey((k) => k + 1);
  };

  useEffect(() => {
    if (isOpen) {
      if (isEditMode && roleIdToEdit) {
        loadRoleToEdit(roleIdToEdit);
      } else {
        resetForm();
      }
    }
  }, [isOpen, roleIdToEdit]);

  const resetForm = () => {
    setName('');
    setStatus(true);
    setSelectedPermissions([]);
    setFormError(null); // reset error
  };

  const loadRoleToEdit = async (id: string) => {
    setFormLoading(true);
    try {
      const res = await getRoleById(id);
      if (res && res.status === true && res.data) {
        setName(res.data.name || '');
        setStatus(res.data.status ?? true);
        setSelectedPermissions(Array.isArray(res.data.permissions) ? res.data.permissions : []);
      } else {
        showToast('error', res?.message || 'Failed to load role data.');
      }
    } catch (err) {
      console.error('Failed loading role:', err);
      showToast('error', 'A network error occurred.');
    } finally {
      setFormLoading(false);
    }
  };

  const handleSave = async () => {
    setFormError(null); // clear previous errors

    if (!name.trim() || selectedPermissions.length === 0) {
      setFormError('Role name and at least one permission are required.');
      return;
    }

    setLoading(true);
    try {
      const payload = { name: name.trim(), status, permissions: selectedPermissions };
      const res = isEditMode && roleIdToEdit
        ? await updateRole(roleIdToEdit, payload)
        : await createRole(payload);

      if (res && res.status) {
        showToast('success', res.message || 'Operation successful!');
        onRefresh();
        onClose();
      } else {
        // ❌ Instead of generic toast, show error under input
        setFormError(res?.message || 'An unknown error occurred');
      }
    } catch (err) {
      console.error('Error saving role:', err);
      setFormError('Error saving role. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {toast && <Toast key={toastKey} message={toast.message} type={toast.type} />}
      <DialogContent className="sm:max-w-[600px] p-0 bg-white overflow-hidden rounded-md">
        <DialogHeader className="p-4 border-b border-gray-300">
          <DialogTitle className="text-xl font-bold">
            {isEditMode ? 'Edit Role' : 'Add Role'}
          </DialogTitle>
          <DialogDescription>
            {isEditMode ? 'Modify role details.' : 'Create a new role.'}
          </DialogDescription>
        </DialogHeader>

        {formLoading ? (
          <div className="p-10 text-center">Loading...</div>
        ) : (
          <>
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <Label>
                  Role <span className="text-red-500">*</span>
                </Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter role name"
                  required
                />
                {/* ✅ Error shown under input */}
                {formError && (
                  <p className="text-xs text-red-500 mt-1">{formError}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label>
                  Permissions <span className="text-red-500">*</span>
                </Label>
                <SimpleMultiSelect
                  options={permissionOptions}
                  value={selectedPermissions}
                  onChange={setSelectedPermissions}
                  placeholder="Select permissions"
                />
              </div>

              <div className="space-y-1">
                <Label>Status</Label>
                <select
                  value={status ? 'active' : 'inactive'}
                  onChange={(e) => setStatus(e.target.value === 'active')}
                  className="w-full border border-gray-300 border-input rounded px-3 py-2 text-sm bg-background"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Not Active</option>
                </select>
              </div>
            </div>

            <DialogFooter className="p-4 border-t border-gray-300 flex justify-end">
              <Button
                variant="outline"
                onClick={onClose}
                className="mr-2 border-gray-300 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                className="bg-[#FF2424] text-white hover:bg-[#FF2424]/90 cursor-pointer"
                onClick={handleSave}
                disabled={loading || formLoading || !name.trim() || selectedPermissions.length === 0}
              >
                {loading
                  ? isEditMode
                    ? 'Updating...'
                    : 'Saving...'
                  : isEditMode
                  ? 'Update Role'
                  : 'Save Role'}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}