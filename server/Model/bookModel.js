import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,       // Every book must have a title
        trim: true
      },
      author: {
        type: String,
        required: true,       // Every book must have an author
        trim: true
      },
      genre: {
        type: String,
        enum: ["Fiction", "Non-fiction", "Sci-Fi", "Romance", "Mystery", "History", "Biography", "Other"],
        default: "Other"
      },
      publishedYear: {
        type: Number,
        min: 0
      },
      ISBN: {
        type: String,
        unique: true,         // No two books should have the same ISBN
        required: true
      },
      availableCopies: {
        type: Number,
        default: 1,
        min: 0
      },
      totalCopies: {
        type: Number,
        default: 1,
        min: 1
      },
      addedDate: {
        type: Date,
        default: Date.now
      }
})

const Book = mongoose.model("Book", bookSchema);
export default Book;