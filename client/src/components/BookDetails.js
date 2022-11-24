import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../queries/queries";

const BookDetails = ({ id }) => {
  const { data } = useQuery(GET_BOOK, {
    variables: { id },
  });
  console.log(data.book);
  if (!data?.book) return <div>No Book Found</div>;
  return (
    <div>
      <h2>{data.book.name}</h2>
      <p>{data.book.genre}</p>
      <p>{data.book.author.name}</p>
      <p>All books by this author</p>
      <ul>
        {data.book.author.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookDetails;
