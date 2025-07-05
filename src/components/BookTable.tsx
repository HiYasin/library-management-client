import { useGetAllBooksQuery } from "@/redux/features/books/bookApi";
import { columns } from "./data-table/columns";
import { DataTable } from "./data-table/data-table";
import Spinner from "./ui/spinner";

export default function BookTable() {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);

  if (isLoading) {
    return (
      <div className="container mx-auto h-[80vh] flex justify-center items-center">
        <Spinner size={50}/>
      </div>
    );
  }

  if(isError){
    return(
      <div className="container mx-auto py-10 flex justify-center items-center">
        <span className="text-red-500 text-lg">Failed to load books. Please try again later.</span>
      </div>
    )
  }
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data.data} />
    </div>
  );
}
