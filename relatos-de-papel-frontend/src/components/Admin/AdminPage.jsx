"use client"

import { useState } from "react"
import "./AdminPage.css"

const AdminBooks = () => {
  const [books] = useState([
    {
      id: 1,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      year: 1967,
      cover: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 2,
      title: "El señor de los anillos",
      author: "J.R.R. Tolkien",
      year: 1954,
      cover: "/placeholder.svg?height=200&width=150",
    },
    { id: 3, title: "1984", author: "George Orwell", year: 1949, cover: "/placeholder.svg?height=200&width=150" },
    {
      id: 4,
      title: "Orgullo y prejuicio",
      author: "Jane Austen",
      year: 1813,
      cover: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 5,
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      year: 1605,
      cover: "/placeholder.svg?height=200&width=150",
    },
  ])

  return (
    <div className="admin-books-container">
      <h1>Administración de Libros</h1>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.cover || "/placeholder.svg"} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h2>{book.title}</h2>
              <p>Autor: {book.author}</p>
              <p>Año: {book.year}</p>
            </div>
            <div className="book-actions">
              <button className="edit-btn">Editar</button>
              <button className="delete-btn">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-book-btn">Agregar Nuevo Libro</button>
    </div>
  )
}

export default AdminBooks