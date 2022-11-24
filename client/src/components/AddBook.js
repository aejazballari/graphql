import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from "../queries/queries";

const AddBook = () => {
  const { data: authorData, loading: authorLoading } = useQuery(GET_AUTHORS);
  const [addBook, { data, loading, error }] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });
  //   console.log(useMutation(ADD_BOOK));
  const [book, setBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  console.log(data);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addBook({
        variables: {
          name: book.name,
          genre: book.genre,
          authorId: book.authorId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Book name:</label>
        <input
          name="name"
          value={book.name}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="field">
        <label htmlFor="genre">Genre:</label>
        <input
          name="genre"
          value={book.genre}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="field">
        <label htmlFor="authorId">Author:</label>
        <select name="authorId" value={book.authorId} onChange={handleChange}>
          <option>Select author</option>
          {authorLoading ? (
            <option disabled>Loading authors</option>
          ) : (
            authorData.authors.map((author) => {
              return (
                <option value={author.id} key={author.id}>
                  {author.name}
                </option>
              );
            })
          )}
        </select>
      </div>
      <button type="submit">+</button>
    </form>
  );
};

export default AddBook;
