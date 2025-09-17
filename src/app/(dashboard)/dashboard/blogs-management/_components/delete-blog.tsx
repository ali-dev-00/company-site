"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteBlogModal({ isOpen, onClose, onDelete }: DeleteBlogModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Blog</DialogTitle>
        </DialogHeader>
        <div className="py-2 text-sm text-gray-700">
          Are you sure you want to delete this blog? This action cannot be undone.
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button className="bg-red-600 hover:bg-red-600/90 text-white" onClick={onDelete}>Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
