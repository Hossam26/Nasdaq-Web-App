import "./ExploreScreen.scss";
import React, { useEffect} from "react";
import StockList from "./StockList"
import "bootstrap/dist/css/bootstrap.min.css";
import {useStock} from "./useStock"
import NavBarComponent from "../Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
const ExploreScreen: React.FC = () => {
  const {stocks, isLoadingStocks, getStockData, getNextStockData} = useStock();
  
  const getSearchResult = (Keyword: string) => {
    console.log(Keyword);
  };
useEffect(()=>{

  getStockData();

},[])
  return (
    <div>
      <NavBarComponent />
      <SearchBar getSearchResult={getSearchResult} />
      <StockList
        stocks={stocks}
        isLoadingStocks={isLoadingStocks}
        getNextStockData={getNextStockData}
      />  
    </div>
  );
};

export default ExploreScreen;
