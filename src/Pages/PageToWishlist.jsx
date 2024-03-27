import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlist } from "../utiles";
import BarGraph from "../components/BarGraph";


const PageToWishlist = () => {
    const books = useLoaderData()
    const [wishlistBooks, setWishlistBooks] = useState([])

useEffect(()=>{
    const storedWishlistBooks = getWishlist()
    if(books.length>0){
            const booksWishlist = books.filter((book) => storedWishlistBooks.includes(book.bookId));
            setWishlistBooks(booksWishlist);
    }
},[books])

    return (
        <div className="flex justify-center items-center h-screen">
            <BarGraph books={wishlistBooks}></BarGraph>
        </div>
    );
};

export default PageToWishlist;