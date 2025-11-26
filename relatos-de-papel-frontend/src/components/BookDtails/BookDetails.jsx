import { useParams } from "react-router-dom";
import booksData from "../../data/books.json";
import { useCart } from "../../utilities/CartContext";
import "./BookDetails.css";
const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === Number(id));
  const { addToCart } = useCart();

  if (!book) return <p>Libro no encontrado.</p>;

  return (
    <div className="book-details">
      <img src={book.cover} alt={`Portada de ${book.title}`} className="book-cover" />
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Precio: ${book.price}</p>
      <button onClick={() => addToCart(book)}>Agregar al carrito</button>
    </div>
  );
};

export default BookDetails;
