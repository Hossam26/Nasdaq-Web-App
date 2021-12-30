import React from "react";
import { Form, FormControl } from "react-bootstrap";



export type Props = {
  getSearchResult: (KeyWord: string) => void;
};

const Search: React.FC<Props> = ({ getSearchResult }) => {
  return (
    <Form className="d-flex mt-2 w-75 m-auto">
      <FormControl
        type="search"
        placeholder="Search by stock name"
        className="me-2"
        onChange={(e) => getSearchResult(e.target.value)}
      />
      
    </Form>
  );
};

export default Search