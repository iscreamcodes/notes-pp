import Book from "../Model/bookModel.js";

export const addBook = async (req, res) => {
    try {
      const newBook = new Book(req.body)
      await newBook.save();
      res.status(201).json({ message: "Book added successfully", book: newBook });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
        
    }
}
 export const getBooks = async(req,res) =>{
  try {
    const books = await Book.find()
    res.status(200).json(books)

  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
 }
 export const getBookById = async(req,res) =>{
  try {
    const id = req.params.id
    const book = await Book.findById(id)
    res.status(200).json(book)
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
 }
export const updateBook = async(req,res) =>{
  try {
    const id = req.params.id
    const bookExists = await Book.findById(id)
    if(!bookExists){
      return res.status(404).json({message:"Book not found"})
    }
    const updateBook = await Book.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json({message:"Book updated successfully",book:updateBook})
  } catch (error) {
    console.error("Error updating:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}
export const deleteBook = async(req,res) =>{
  try {
    const id = req.params.id
    const deletedBook = await Book.findByIdAndDelete(id)
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
 

}