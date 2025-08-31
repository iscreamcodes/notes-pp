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