import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  const authorsList = props.authors.map(author => (
    <AuthorCard author={author} key={author.last_name} />
  ));
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorsList}</div>
      </div>
    </div>
  );
}

export default AuthorList;
