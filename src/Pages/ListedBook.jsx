import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getBooks } from "../utiles";
import ReadBook from "../components/ReadBook";


const ListedBook = () => {
    const books = useLoaderData()
    const [readBooks, setReadBooks] = useState([])
    const [tabIndex, setTabIndex] = useState(0)

    const [sortBy, setSortBy] = useState(""); // State for sorting field
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        const storedBooks = getBooks()
        if (books.length > 0) {
            const booksRead = []
            for (const bookId of storedBooks) {
                const book = books.find(book => book.bookId === bookId)
                if (book) {
                    booksRead.push(book)
                }
            }
            sortBooks(booksRead);
        }
    }, [books, sortBy]);

    const sortBooks = (booksToSort) => {
        const sortedBooks = [...booksToSort].sort((a, b) => {
            if (sortBy === "rating") {
                return b.rating - a.rating 
            } else if (sortBy === "totalPages") {
                return b.totalPages - a.totalPages;
            } else if (sortBy === "yearOfPublishing") {
                return b.yearOfPublishing - a.yearOfPublishing;
            }
            return 0;
        });
        setReadBooks(sortedBooks);
    };

    const handleSortChange = (e) => {
        const selectedSortBy = e.target.value;
        setSortBy(selectedSortBy);
    };

    return (
        <div>
            <div className="text-3xl font-bold border bg-[#1313130D] text-center py-9 my-9">
                <p>Books</p>
            </div>
            <div className="flex justify-center">
                <select className="select w-full max-w-xs bg-[#23BE0A] text-lg font-semibold text-white" onChange={handleSortChange}>
                    <option disabled selected >Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number of Pages</option>
                    <option value="yearOfPublishing">Publisher year</option>
                </select>
            </div>
            <div className="flex mt-10 items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link
                //  to=''
                  onClick={() => setTabIndex(0)}
                    className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'
                        }  `}>
                    <span>Read Books</span>
                </Link>
                <Link 
                // to='wishlistBooks'
                 onClick={() => setTabIndex(1)}
                    className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'
                        }  `}>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <div>
                {
                    readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ListedBook;