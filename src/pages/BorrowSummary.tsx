import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Spinner from "@/components/ui/spinner";
import { useBorrowSummaryQuery } from "@/redux/features/borrow/borrowApi";

// Define the type for a single summary item based on the provided data
interface BorrowSummaryItem {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export default function BorrowSummary() {
  const { data, isLoading, isError } = useBorrowSummaryQuery(undefined);

  if (isLoading) {
    return (
      <div className="container mx-auto h-[80vh] flex justify-center items-center">
        <Spinner size={50} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center">
        <span className="text-red-500 text-lg">
          Failed to load borrow summary. Please try again later.
        </span>
      </div>
    );
  }

  const summaryData: BorrowSummaryItem[] = data?.data || [];

  if (summaryData.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Borrowing Summary
        </h1>
        <p className="text-muted-foreground">No books are currently borrowed.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl w-full mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Borrowing Summary
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Here is a summary of the books currently borrowed from the library.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {summaryData.map((item, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="text-xl font-semibold text-primary truncate" title={item.book.title}>
                {item.book.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm flex-grow flex flex-col justify-between">
              <div>
                <p className="text-muted-foreground">
                  ISBN: <span className="text-foreground font-mono">{item.book.isbn}</span>
                </p>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground">Total Borrowed Copies</p>
                <p className="text-4xl font-bold text-foreground">{item.totalQuantity}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
