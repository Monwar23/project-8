import toast from "react-hot-toast"
export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}

export const saveBooks = bookId => {
    let books = getBooks()
    const isExist = books.find(b => b === bookId)
    if (!isExist) {
        books.push(bookId)
        localStorage.setItem('books', JSON.stringify(books))
        return toast.success('Book read Successfully!')
    }
    toast.error('Already Read')
    
} 
