const Books = require("../../model/Books");

const getAllBooks = async (req, res) => {
  try {
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
    res.status().json({ error: "An error occurred while fetching book." });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Books.findByIdAndUpdate(id);
    res.status(200).json(books);
  } catch (error) {
    res.status().json({ error: "An error occurred while updating books." });
  }
};

const addBook = async (req, res) => {
  try {
    const { title, author, price, image } = req.body;
    const newBook = Books.create({ title, author, price, image });
    res.status(201).json(newBook);
  } catch (error) {
    res.status().json({ error: "An error creating book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    Books.findByIdAndUpdate(id);
    res.status(200).end();
  } catch (error) {
    res.status().json({ error: "An error in deleting" });
  }
};

module.exports = { getAllBooks, updateBook, addBook, getBookById, deleteBook };
