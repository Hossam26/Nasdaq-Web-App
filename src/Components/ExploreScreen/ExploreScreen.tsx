import "./ExploreScreen.scss";
import React, { useState } from "react";
import * as actions from "../../StockDataStore/actions";
import { Stock } from "../../Types/Stock";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  StyledContainer,
  StyledGrid,
  Ticker,
  Name,
  
} from "./StyledComponents";
import { Row, Spinner } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import NavBarComponent from "./Navbar/Navbar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const ExploreScreen: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoadingStocks, setIsLoading] = useState<boolean>(true);
  const getStockData = async () => {
    if (isLoadingStocks) {
      const stockData = await actions.loadApp();
      setStocks(stockData);
      setIsLoading(false);
    }
  };
  getStockData();
  const getSearchResult = (Keyword: string) => {
    console.log(Keyword);
  };
  const getNextStockData = async () => {
    setIsLoading(true)
    const updatedData = await actions.getNextStockData();
    setStocks(updatedData);
    setIsLoading(false)
  };

  return (
    <div>
      <NavBarComponent />
      <SearchBar getSearchResult={getSearchResult} />
      <div className="ExploreScreen">
        <StyledContainer>
          <Row className="justify-content-center">
            {isLoadingStocks && <Spinner animation="grow" variant="light" />}
            {
              stocks.map((stock, index) => (
                <StyledGrid md="4" key={index}>
                  <Link to={"/StockDetails/"+index}>
                    <Ticker>{stock.ticker}</Ticker>
                    <Name>{stock.name}</Name>
                  </Link>
                  {index === stocks.length - 1 && (
                    <Waypoint onEnter={() => getNextStockData()} />
                  )}
                </StyledGrid>
              ))}
          </Row>
        </StyledContainer>
      </div>
    </div>
  );
};

export default ExploreScreen;
