import React from "react";
import { Waypoint } from "react-waypoint";
import { Stock } from "../../Types/Stock";
import { Link } from "react-router-dom";
import {
  StyledContainer,
  StyledGrid,
  Ticker,
  Name,
  
} from "./StyledComponents";
import { Row, Spinner } from "react-bootstrap";

interface Iprops {
  stocks: Stock[];
  isLoadingStocks:boolean
  getNextStockData: () => void;
}


const StockList: React.FC<Iprops>=({stocks,isLoadingStocks, getNextStockData})=>{


return (
  <div className="StockList">
    <StyledContainer>
      <Row className="justify-content-center">
        {isLoadingStocks && (
          <Spinner
            className="position-fixed"
            data-testid="spinner"
            animation="grow"
            variant="light"
          />
        )}
        {stocks.map((stock, index) => (
          <StyledGrid data-testid="stockList" md="4" key={index}>
              
              <Link to={"/StockDetails/" + stock.ticker}>
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
);

}

export default StockList;