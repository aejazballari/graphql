import { useState } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";

function App() {
  const [id, setId] = useState("");
  const getBookId = (bookId) => {
    setId(bookId);
  };
  return (
    <div className="App">
      <BookList getBookId={getBookId} />
      <AddBook />
      <BookDetails id={id} />
    </div>
  );
}

export default App;
