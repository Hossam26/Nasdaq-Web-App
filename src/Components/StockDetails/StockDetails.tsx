import "./StockDetails.scss";
import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useParams } from "react-router-dom";
import { useStockDetails } from "./useStockDetails";
import NavBarComponent from "../Navbar/Navbar";
type MyParams = {
  Ticker: string;
};
const StockDetails: React.FC = () => {
 
  const {stockPrevDayInfo,stockCompanyInfo, getStockDetails} = useStockDetails();
  const {Ticker}= useParams() as MyParams;
  
 
useEffect(()=>{  
  getStockDetails(Ticker);

},[])

  return (
    <div>
      <NavBarComponent Home={true}></NavBarComponent>
      <Container
        className="d-flex flex-column jusitfy-content-center mb-3"
        fluid={true}
      >
        <Row className="mx-1">
          {stockCompanyInfo?.industry && (
            <img
              src={stockCompanyInfo?.Logo}
              className="w-25 my-4 m-auto img-fluid img-thumbnail"
            ></img>
          )}
          <div className="bg rounded p-2">
            <h1>{stockPrevDayInfo?.ticker}</h1>
            <h2 className="px-2">{stockCompanyInfo?.Name}</h2>
          </div>
        </Row>
        <Row className="mx-1 bg my-2 p-2 rounded">
          <h1>statistics</h1>
          <Col md={3} className="m-4">
            <h5>Open</h5>
            <h3>{stockPrevDayInfo?.open}</h3>
          </Col>
          <Col md={3} className="m-4">
            <h5>Close</h5>
            <h3>{stockPrevDayInfo?.close}</h3>
          </Col>
          <Col md={3} className="m-4">
            <h5>Volume</h5>
            <h3>{stockPrevDayInfo?.volume}</h3>
          </Col>
          <Col md={3} className="m-4">
            <h5>High</h5>
            <h3>{stockPrevDayInfo?.high}</h3>
          </Col>
          <Col md={3} className="m-4">
            <h5>Low</h5>
            <h3>{stockPrevDayInfo?.low}</h3>
          </Col>
        </Row>
        {stockCompanyInfo?.industry && (
          <Row className="bg mx-1 p-3 rounded">
            <h1 className="py-1">About</h1>
            {stockCompanyInfo?.industry && (
              <h4 className="py-1 text-muted">Industry</h4>
            )}
            <h3 className="py-1">{stockCompanyInfo?.industry}</h3>
            {stockCompanyInfo?.Description && (
              <h4 className="py-1 text-muted">Description</h4>
            )}
            <h3 className="py-1">{stockCompanyInfo?.Description}</h3>
            {stockCompanyInfo?.companyWebsite && (
              <a
                href={stockCompanyInfo?.companyWebsite}
                target="_blank"
                rel="noreferrer"
                className="py-1"
              >
                <Button size="lg">Website</Button>
              </a>
            )}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default StockDetails;