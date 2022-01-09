import { useState } from "react";
import { Stock } from "../../Types/Stock";
import * as actions from "../../StockDataStore/actions";

export const useStock = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoadingStocks, setIsLoading] = useState<boolean>(true);
  const getStockData = async () => {
    if (isLoadingStocks) {
      const stockData = await actions.loadApp();
      setStocks(stockData);
      setIsLoading(false);
    }
  };

  const getNextData = async () => {
    setIsLoading(true);
    const updatedData = await actions.getNextData();
    setStocks(updatedData);
    setIsLoading(false);
  };
  const searchIsActive = (Active: boolean) => {
    actions.searchIsActive(Active);
  };
  const getSearchResults = async (searchKey: string) => {
    setIsLoading(true);

    await actions.setSearchKey(searchKey);
    const stockData = await actions.Loadsearch();
    setStocks(stockData);
    setIsLoading(false);
  };
  const getCurrentStocks = () => {
    setIsLoading(true);
    const updatedData = actions.getCurrentStocks();
    setStocks(updatedData);
    setIsLoading(false);
  };

  return {
    stocks,
    isLoadingStocks,
    getStockData,
    getNextData,
    searchIsActive,
    getSearchResults,
    getCurrentStocks,
  };
};
