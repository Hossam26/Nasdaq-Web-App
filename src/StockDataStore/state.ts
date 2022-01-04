import { State } from "../Types/State";

export const state: State = {
  Data: {
    Stocks: [],
    NextUrl: "",
  },
  searchIsActive: false,
  firstSearch:true,
  searchKey: "",
  searchresults: {
    StockResults: [],
    NextUrl: "",
  },
};