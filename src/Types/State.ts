import { Stock } from "./Stock";
import { TickerPrevDayInfo } from "./TickerPrevDayInfo";
import { TickerCompanyInfo } from "./TickerCompanyInfo";
export type State = {
  data: {
    Stocks: Stock[];
    NextUrl: string;
  };
  searchIsActive: boolean;
  firstSearch: boolean;
  searchKey: string;
  searchResults: {
    StockResults: Stock[];
    NextUrl: string;
  };
  stockDetails: {
    TickerPrevDayInfo: TickerPrevDayInfo;
    TickerCompanyInfo: TickerCompanyInfo;
  };
};
