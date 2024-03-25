import { useLoaderData } from "react-router-dom";
import SingleBook from "./SingleBook";


const BookSection = () => {
    const books=useLoaderData()
    return (
        <div>
           <div>
           <h2 className="text-4xl font-bold text-center mt-5">Books</h2>
           </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {
                books.map(book=><SingleBook key={book.bookId} book={book}></SingleBook>)
            }
            </div>
        </div>
    );
};

export default BookSection;