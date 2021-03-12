let books = [
  {
    isbn: 1,
    judul: "Heri puter dan batu bertuah ",
    sinopsis:
      "Buku pertama petualangan heri puter!",
    penulis: "JK Joking ",
    genre: "fantasi",
  },
  {
    isbn: 2,
    judul: "Heri puter dan labirin nyasar ",
    sinopsis:
      "Buku kedua petualangan heri puter!",
    penulis: "JK Joking ",
    genre: "fantasi",
  },
  {
    isbn: 3,
    judul: "Heri puter dan tahanan cipinang ",
    sinopsis:
      "Buku ketiga petualangan heri puter!",
    penulis: "JK Joking ",
    genre: "fantasi",
  },
  {
    isbn: 4,
    judul: "Heri puter dan piala kebakar ",
    sinopsis:
      "Buku keempat petualangan heri puter!",
    penulis: "JK Joking ",
    genre: "fantasi",
  },
];

exports.getAllBook = (req, res) => {
  return res.status(200).json({
    success: true,
    books,
  });
};

exports.getBookById = (req, res) => {
  const newBook = books.find((i) => i.isbn === +req.params.isbn);
  if (newBook !== undefined) {
    res.status(200).json(newBook);
  } else {
    res.status(404).json({
      error: true,
      message: `ERROR 404, FILE NOT FOUND`,
    });
  }
};

exports.postNewBook = (req, res) => {
  const { judul, sinopsis, penulis, genre } = req.body;

  const isbn = books[books.length - 1].isbn + 1;

  const newPost = {
    isbn,
    judul,
    sinopsis,
    penulis,
    genre,
  };
  books.push(newPost);
  res.status(201).json({ message: `Data baru berhasil ditambahkan!` });
};

exports.putBook = (req, res) => {
  let isbn = req.params.isbn;
  books.filter((data) => {
    if (data.isbn === parseInt(isbn)) {
      (data.judul = req.body.judul),
        (data.sinopsis = req.body.sinopsis),
        (data.penulis = req.body.penulis),
        (data.genre = req.body.genre);
      return data;
    }
  });
  res.status(200).json({
    message: `Buku dengan ISBN ${req.params.isbn} berhasil diperbarui!`,
  });
};

exports.deleteBook = (req, res) => {
  books = books.filter((i) => i.isbn !== +req.params.isbn);
  res.status(200).json({
    message: `Buku dengan ISBN ${req.params.isbn} udah dihapus!`,
  });
};
