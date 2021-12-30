import "./StockDetails.scss";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const StockDetails: React.FC = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>This is the stock details page</h1>
      <Link to="/">
        <Button size="lg">Back Home</Button>
      </Link>
    </div>
  );
};

export default StockDetails;