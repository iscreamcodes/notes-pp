import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,        // No two users can have the same email
    lowercase: true
  },
  password: {
    type: String,
    required: true       // (You’ll hash this later before saving)
  },
  role: {
    type: String,
    enum: ["member", "librarian", "admin"],
    default: "member"
  },
  borrowedBooks: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"        // Reference to the Book model
      },
      borrowedDate: {
        type: Date,
        default: Date.now
      },
      dueDate: {
        type: Date
      },
      returned: {
        type: Boolean,
        default: false
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

export default User;
