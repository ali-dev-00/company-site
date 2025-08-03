
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;

}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white w-[350px] " >

        <div className="py-1">
          <h3 className="font-semibold text-xl mb-2" >Delete Course</h3>
          <p className="text-gray-400">Are you sure you want to delete the course?</p>
        </div>
        <DialogFooter className="w-full flex flex-row gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 border-gray-200"
          >
            Cancel
          </Button>
          <Button
            className="flex-1 bg-[#FF2424] text-white"
            onClick={onDelete}
          >
            Yes, Delete
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
