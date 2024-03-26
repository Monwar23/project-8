import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooks } from "../utiles";


const ListedBook = () => {
    const books=useLoaderData()
    const [readBooks, setReadBooks] = useState([])
    const [displayBooks, setDisplayBooks] = useState([])

    onst handleBooksFilter=filter=>{
        if(filter==='rating'){
            setDisplayBooks(readBooks)
        }
        else if(filter==='totalPages'){
            const =appliedJobs.filter(job=>job.remote_or_onsite==="Remote")
            setdisplayJobs(remoteJobs)
        }
        else if(filter==='yearOfPublishing'){
            const onsiteJobs=appliedJobs.filter(job=>job.remote_or_onsite==="Onsite")
            setdisplayJobs(onsiteJobs)
        }
    }

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
            setReadBooks(booksRead)        
        }
    }, [books]);

    return (
        <div>
            <div className="text-3xl font-bold border bg-[#1313130D] text-center py-9 my-9">
                <p>Books</p>
            </div>
            <div>
                <select className="select w-full max-w-xs bg-[#23BE0A] text-lg font-semibold text-white">
                    <option disabled selected >Sort By</option>
                    <option><a href=""></a>Rating</option>
                    <option><a href="">Number of Pages</a></option>
                    <option><a href="">Publisher year</a></option>
                </select>
            </div>
            <div>
                Read:{readBooks.length}
                {
                    .map(job => <li key={job.id} ><span>Job Name: {job.job_title} <br /> Company Name: {job.company_name} <br /> {job.remote_or_onsite}</span></li>)
                }
            </div>
        </div>
    );
};

export default ListedBook;