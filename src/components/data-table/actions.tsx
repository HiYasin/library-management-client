import { Button } from "@/components/ui/button";
import { useDeleteBookMutation } from "@/redux/features/books/bookApi";
import { BookIcon, EyeIcon, PencilIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import type { IBookCol } from "./columns";
import { useState } from "react";
import Borrow from "../Borrow";

interface ActionsProps {
  row: IBookCol;
}

export default function Actions({ row }: ActionsProps) {
  const [openBorrow, setOpenBorrow] = useState(false);

  const [deleteBook] = useDeleteBookMutation();

  // console.log(row)
  const handleDelete = async (bookId: string) => {
    try {
      await deleteBook(bookId).unwrap();
      toast.success("Book deleted successfully");
    } catch (error) {
      toast.error("Failed to delete book");
      console.error("Failed to delete book:", error);
    }
  };

  const navigate = useNavigate();

  const handleDetails = (bookId: string) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <div className="flex gap-2">
      <Button
        size="icon"
        variant="ghost"
        className="hover:bg-primary cursor-pointer hover:text-white"
        onClick={() => handleDetails(row._id)}
      >
        <EyeIcon className="w-4 h-4" />
      </Button>
      <div>
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-primary cursor-pointer hover:text-white"
          onClick={() => setOpenBorrow(true)}
        >
          <BookIcon className="w-4 h-4" />
        </Button>
        <Borrow bookId={row._id} open={openBorrow} onClose={() => setOpenBorrow(false)} />
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="hover:bg-primary cursor-pointer hover:text-white"
        onClick={() => navigate(`/update-book/${row._id}`)}
      >
        <PencilIcon className="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="hover:bg-primary cursor-pointer"
        onClick={() => handleDelete(row._id)}
      >
        <TrashIcon className="w-4 h-4 text-red-500" />
      </Button>
    </div>
  );
}
