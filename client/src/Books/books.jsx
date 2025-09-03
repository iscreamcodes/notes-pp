import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddBook(){
    const[book,setBook] = useState({
        title: "",
        author: "",
        genre: "Other",
        publishedYear: "",
        ISBN: "",
        availableCopies: 1,
        totalCopies: 1,
        addedDate: new Date().toISOString().split("T")[0] // yyyy-mm-dd for date input
    })
    const handleAddBook = async(e) =>{
    e.preventDefault();
    console.log("Submitting book data:", book);
    await axios
          .post("http://localhost:3000/api/book", book)
          .then((res)=>{
            console.log("User added successfully:", res.data);
            toast.success("User added successfully");
            setBook({
                title: "",
                author: "",
                genre: "Other",
                publishedYear: "",
                ISBN: "",
                availableCopies: 1,
                totalCopies: 1,
                addedDate: new Date().toISOString().split("T")[0] // yyyy-mm-dd for date input
            })
           

          })
    }
   
    return(
        <>
        <h1>Add Book</h1>
        <form onSubmit={handleAddBook}>
        <input
    type="text"
    placeholder="Enter book title"
    value={book.title}
    onChange={(e) => setBook({ ...book, title: e.target.value })}
    required
  />

  {/* Author */}
  <input
    type="text"
    placeholder="Enter author name"
    value={book.author}
    onChange={(e) => setBook({ ...book, author: e.target.value })}
    required
  />

  {/* Genre (dropdown) */}
  <select
    value={book.genre}
    onChange={(e) => setBook({ ...book, genre: e.target.value })}
  >
    <option value="Fiction">Fiction</option>
    <option value="Non-fiction">Non-fiction</option>
    <option value="Sci-Fi">Sci-Fi</option>
    <option value="Romance">Romance</option>
    <option value="Mystery">Mystery</option>
    <option value="History">History</option>
    <option value="Biography">Biography</option>
    <option value="Other">Other</option>
  </select>

  {/* Published Year */}
  <input
    type="number"
    placeholder="Year published"
    value={book.publishedYear}
    onChange={(e) => setBook({ ...book, publishedYear: e.target.value })}
    min="0"
  />

  {/* ISBN */}
  <input
    type="text"
    placeholder="Enter ISBN"
    value={book.ISBN}
    onChange={(e) => setBook({ ...book, ISBN: e.target.value })}
    required
  />

  {/* Available Copies */}
  <input
    type="number"
    placeholder="Available copies"
    value={book.availableCopies}
    onChange={(e) => setBook({ ...book, availableCopies: e.target.value })}
    min="0"
  />

  {/* Total Copies */}
  <input
    type="number"
    placeholder="Total copies"
    value={book.totalCopies}
    onChange={(e) => setBook({ ...book, totalCopies: e.target.value })}
    min="1"
  />

  {/* Added Date */}
  <input
    type="date"
    value={book.addedDate}
    onChange={(e) => setBook({ ...book, addedDate: e.target.value })}
  />

  {/* Submit */}
  <button type="submit">Add Book</button>
        </form>
        </>
    )
}