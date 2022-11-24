import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/queries";

const BookList = ({ getBookId }) => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) {
    return <h1>Fetching Books</h1>;
  }
  return (
    <ul id="book-list">
      {data.books.map((item) => {
        return (
          <li key={item.id} onClick={() => getBookId(item.id)}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
