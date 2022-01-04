import "./ExploreScreen.scss";
import React, { useEffect} from "react";
import StockList from "./StockList"
import "bootstrap/dist/css/bootstrap.min.css";
import {useStock} from "./useStock"
import NavBarComponent from "../Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
const ExploreScreen: React.FC = () => {
  const {
    stocks,
    isLoadingStocks,
    getStockData,
    getNextData,
    searchIsActive,
    getSearchResults,
    getCurrentStocks
  } = useStock();
  const getSearchResult = (Keyword: string) => {
    if(Keyword.length!=0){
    searchIsActive(true);
      getSearchResults(Keyword)
    }
    else{
      searchIsActive(false)
      getCurrentStocks()
    }
    
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
        getNextStockData={getNextData}
      />  
    </div>
  );
};

export default ExploreScreen;
