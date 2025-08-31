import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";

interface DeleteCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void | Promise<void>;
}

const DeleteCategoryModal: React.FC<DeleteCategoryModalProps> = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white w-[350px]">
        <div className="py-2">
          <DialogTitle className="text-xl font-bold">Delete Category</DialogTitle>
          <p className="text-gray-500">Are you sure you want to delete this category?</p>
        </div>
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button className="bg-[#FF2424] text-white" onClick={onDelete}>Yes, Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCategoryModal;