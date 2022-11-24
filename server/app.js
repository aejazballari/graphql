const express = require("express");
const { graphqlHTTP, graphiql } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect("mongodb://localhost:27017/graphql-practice");

mongoose.connection.once("open", () => {
  console.log("connected to compass");
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("listening to a port 4000");
});
