import { useState } from "react";
import * as actions from "../../StockDataStore/actions";
import { TickerCompanyInfo } from "../../Types/TickerCompanyInfo";
import { TickerPrevDayInfo } from "../../Types/TickerPrevDayInfo";

export const useStockDetails=()=>{
      const [stockPrevDayInfo, setStockPrevDayInfo] = useState<TickerPrevDayInfo>();
      const [stockCompanyInfo, setStockCompanyInfo] = useState<TickerCompanyInfo>();

const getStockDetails =async (Ticker: string) => {
 const stockDetails= await actions.getStockDetails(Ticker);
 setStockPrevDayInfo(stockDetails.TickerPrevDayInfo);
  setStockCompanyInfo(stockDetails.TickerCompanyInfo);

};    

return {
  stockPrevDayInfo,
  stockCompanyInfo,
  getStockDetails,
};
}
