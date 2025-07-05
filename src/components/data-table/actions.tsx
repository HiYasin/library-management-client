import { Button } from "@/components/ui/button";
import { useDeleteBookMutation } from "@/redux/features/books/bookApi";
import { EyeIcon, PencilIcon, TrashIcon } from "lucide-react";
import { toast } from "react-toastify";

export default function Actions({ row }) {
  const [deleteBook] = useDeleteBookMutation(row.original.id);

  const handleDelete = async (bookId: string) => {
    try {
      await deleteBook(bookId).unwrap();
      toast.success("Book deleted successfully");
    } catch (error) {
      toast.error("Failed to delete book");
      console.error("Failed to delete book:", error);
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        size="icon"
        variant="ghost"
        className="hover:bg-primary cursor-pointer hover:text-white"
        onClick={() => alert(JSON.stringify(row.original, null, 2))}
      >
        <EyeIcon className="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="hover:bg-primary cursor-pointer hover:text-white"
        onClick={() => alert(JSON.stringify(row.original, null, 2))}
      >
        <PencilIcon className="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="hover:bg-primary cursor-pointer"
        onClick={() => handleDelete(row.original._id)}
      >
        <TrashIcon className="w-4 h-4 text-red-500" />
      </Button>
    </div>
  );
}
