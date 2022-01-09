import { useState } from "react";
import * as actions from "../../StockDataStore/actions";
import { TickerCompanyInfo } from "../../Types/TickerCompanyInfo";
import { TickerPrevDayInfo } from "../../Types/TickerPrevDayInfo";

export const useStockDetails = () => {
  const [stockPrevDayInfo, setStockPrevDayInfo] = useState<TickerPrevDayInfo>();
  const [stockCompanyInfo, setStockCompanyInfo] = useState<TickerCompanyInfo>();

  const [isLoadingData, setisLoadingData] = useState<boolean>(false);
  const getStockDetails = async (Ticker: string) => {
    setisLoadingData(true);
    const stockDetails = await actions.getStockDetails(Ticker);
    setStockPrevDayInfo(stockDetails.TickerPrevDayInfo);
    setStockCompanyInfo(stockDetails.TickerCompanyInfo);
    setisLoadingData(false);
  };

  return {
    stockPrevDayInfo,
    stockCompanyInfo,
    isLoadingData,
    getStockDetails,
  };
};
