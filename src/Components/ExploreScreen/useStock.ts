import React, { useState } from "react";
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

  const getNextStockData = async () => {
    setIsLoading(true);
    const updatedData = await actions.getNextStockData();
    setStocks(updatedData);
    setIsLoading(false);
  };

  return { stocks, getStockData, getNextStockData, isLoadingStocks };
};
