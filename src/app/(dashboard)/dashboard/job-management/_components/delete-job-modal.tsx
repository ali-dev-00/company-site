import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter} from "@/components/ui/dialog";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;

}

const DeleteJobModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog open={isOpen}  onOpenChange={onClose}>
      <DialogContent className="bg-white w-[350px] " >
        
        <div className="py-1">
          <h3 className="font-semibold text-xl mb-2" >Delete Job</h3>
          <p className="text-gray-400">Are you sure you want to delete the Job?</p>
        </div>
        <DialogFooter className="w-full flex flex-row">
          <Button variant="outline" onClick={onClose} className="max-w-1/2 w-full border-gray-200">
            Cancel
          </Button>
          <Button className="bg-[#FF2424] text-white max-w-1/2 w-full" onClick={onDelete}>
            Yes, Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteJobModal;
