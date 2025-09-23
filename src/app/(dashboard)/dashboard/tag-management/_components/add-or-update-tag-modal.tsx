'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Toast from '@/components/ui/toast';
import { createTag, updateTag } from '@/services/tag.service';
import { fetchAllTags } from '@/services/tag.service';

import { Tag } from '@/types/tag';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  tagIdToEdit?: string | null;
  onRefresh: () => void;
}

export default function AddOrUpdateTagModal({ isOpen, onClose, tagIdToEdit, onRefresh }: Props) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [toastKey, setToastKey] = useState(0);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setToastKey((k) => k + 1);
  };

  const isEditMode = !!tagIdToEdit;

  useEffect(() => {
    if (isOpen) {
      if (isEditMode && tagIdToEdit) {
        loadTag(tagIdToEdit);
      } else {
        resetForm();
      }
    }
  }, [isOpen, tagIdToEdit]);

  const resetForm = () => {
    setName('');
    setStatus(true);
    setFormError(null);
  };

  const loadTag = async (id: string) => {
    setFormLoading(true);
    try {
      const res = await fetchAllTags();
      if (res.status) {
        const existing = res.data.find((t: Tag) => t._id === id);
        if (existing) {
          setName(existing.name);
          setStatus(existing.status);
        } else {
          showToast('error', 'Tag not found');
        }
      } else {
        showToast('error', res.message || 'Failed to load tag');
      }
    } finally {
      setFormLoading(false);
    }
  };

  const handleSave = async () => {
    setFormError(null);
    if (!name.trim()) {
      setFormError('Tag name is required.');
      return;
    }

    setLoading(true);
    try {
      const payload = { name: name.trim(), status };
      const res = isEditMode && tagIdToEdit
        ? await updateTag(tagIdToEdit, payload)
        : await createTag(payload);

      if (res && res.status) {
        showToast('success', res.message || 'Operation successful');
        onRefresh();
        onClose();
      } else {
        setFormError(res?.message || 'Error saving tag');
      }
    } catch (error) {
      setFormError('Error saving tag.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {toast && <Toast key={toastKey} message={toast.message} type={toast.type} />}
      <DialogContent className="sm:max-w-[500px] p-0 bg-white overflow-hidden rounded-md">
        <DialogHeader className="p-4 border-b border-gray-300">
          <DialogTitle>{isEditMode ? 'Edit Tag' : 'Add Tag'}</DialogTitle>
          <DialogDescription>
            {isEditMode ? 'Modify tag details.' : 'Create a new tag.'}
          </DialogDescription>
        </DialogHeader>
        {formLoading ? (
          <div className="p-8 text-center">Loading...</div>
        ) : (
          <>
            <div className="p-6 space-y-4">
              <div>
                <Label className='mb-2'>Tag Name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} required />
                {formError && <p className="text-red-500 text-xs mt-1">{formError}</p>}
              </div>
              <div>
                <Label className='mb-2'>Status</Label>
                <select
                  value={status ? 'active' : 'inactive'}
                  onChange={(e) => setStatus(e.target.value === 'active')}
                  className="w-full border rounded px-3 py-2 text-sm border-gray-300"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <DialogFooter className="p-4 border-t border-gray-300 flex justify-end">
              <Button variant="outline" onClick={onClose} className="mr-2">
                Cancel
              </Button>
              <Button className="bg-[#FF2424] text-white" onClick={handleSave} disabled={loading}>
                {loading ? (isEditMode ? 'Updating...' : 'Saving...') : isEditMode ? 'Update' : 'Save'}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
