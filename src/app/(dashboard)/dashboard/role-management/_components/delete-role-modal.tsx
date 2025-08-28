import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import Toast from '@/components/ui/toast';
import { useState } from "react";

interface DeleteRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void | Promise<void>;
}

const DeleteRoleModal: React.FC<DeleteRoleModalProps> = ({ isOpen, onClose, onDelete }) => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleDelete = async () => {
    try {
      await onDelete(); // call parent-provided API delete
      setToast({ message: "The role was deleted successfully.", type: "success" });
      onClose(); // close the modal
    } catch (error) {
      setToast({ message: "Failed to delete role. Please try again.", type: "error" });
    }
  };

  return (
    <>
      {/* ✅ Render toast here */}
      {toast && <Toast message={toast.message} type={toast.type} />}

      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white w-[350px]">
          <div className="py-1">
            <DialogTitle className="text-xl font-bold">Delete Role</DialogTitle>
            <p className="text-gray-400">Are you sure you want to delete the Role?</p>
          </div>
          <DialogFooter className="w-full flex flex-row gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-200 cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-[#FF2424] text-white cursor-pointer"
              onClick={handleDelete}
            >
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteRoleModal;