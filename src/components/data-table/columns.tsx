import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { EyeIcon, PencilIcon, TrashIcon } from "lucide-react";


export interface IBookCol {
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  copies: number;
  available: boolean;
}

export const columns: ColumnDef<IBookCol>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Available",
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => (
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
          onClick={() => alert(JSON.stringify(row.original, null, 2))}
        >
          <TrashIcon className="w-4 h-4 text-red-500" />
        </Button>
      </div>
    ),
  },
];
