import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getRead } from "../utiles";
import BarGraph from "../components/BarGraph";


const PageToRead = () => {
    const books = useLoaderData()
    const [readBooks, setReadBooks] = useState([])

useEffect(()=>{
    const storedReadBooks = getRead()
    if(books.length>0){
            const booksRead = books.filter((book) => storedReadBooks.includes(book.bookId));
            setReadBooks(booksRead);
    }
},[books])

    return (
        <div className="flex justify-center items-center h-screen">
            <BarGraph books={readBooks}></BarGraph>
        </div>
    );
};

export default PageToRead;