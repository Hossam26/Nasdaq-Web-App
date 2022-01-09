import { State } from "../Types/State";
import { TickerPrevDayInfo } from "../Types/TickerPrevDayInfo";
import { TickerCompanyInfo } from "../Types/TickerCompanyInfo";

export const state: State = {
  data: {
    Stocks: [],
    NextUrl: "",
  },
  searchIsActive: false,
  firstSearch: true,
  searchKey: "",
  searchResults: {
    StockResults: [],
    NextUrl: "",
  },
  stockDetails: {
    TickerPrevDayInfo: {} as TickerPrevDayInfo,
    TickerCompanyInfo: {} as TickerCompanyInfo,
  },
};
