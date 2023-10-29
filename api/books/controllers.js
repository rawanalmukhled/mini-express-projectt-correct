const Books = require("../../model/Books");

const getAllBooks = async (req, res) => {
  try {
    console.log("HI");
    const books = await Books.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Books.findById(id);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching book." });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const books = await Books.findByIdAndUpdate(id, req.body);

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating books." });
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = await Books.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: "An error creating book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Books.findByIdAndDelete(id);
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: "An error in deleting" });
  }
};

module.exports = { getAllBooks, updateBook, addBook, getBookById, deleteBook };
