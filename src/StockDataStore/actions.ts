import { state } from "./state";
import * as effects from "./effects";

export const loadApp = async () => {
  if (!localStorage.getItem("State")) {
    const stateData = await effects.Api.getInitialStocks();
    state.Data.Stocks = stateData.results;
    state.Data.NextUrl = stateData.next_url;
    localStorage.setItem("State", JSON.stringify(state));
  } else {
    const retrievedData = JSON.parse(localStorage.getItem("State") || "{}");
    state.Data = retrievedData.Data;
  }

  return state.Data.Stocks;
};
export const getNextData = async () => {
  if(state.searchIsActive==true){
    
    
      return getNextSearchData()
  }
  else{
    return getNextStockData()
  }

};
export const getNextStockData = async () => {
  if (state.Data.NextUrl != null) {
    const stateData = await effects.Api.nextStockData(state.Data.NextUrl);

    state.Data.Stocks = [...state.Data.Stocks, ...stateData.results];

    state.Data.NextUrl = stateData.next_url;
    localStorage.setItem("State", JSON.stringify(state));
  }

  return state.Data.Stocks;
};

export const getNextSearchData = async () => {
  
 if (state.searchresults.NextUrl != null) {
   const stateData = await effects.Api.nextSearchData(state.searchresults.NextUrl);

   state.searchresults.StockResults = [
     ...state.searchresults.StockResults,
     ...stateData.results,
   ];

   state.searchresults.NextUrl = stateData.next_url;
     

 }

   return state.searchresults.StockResults;

};
export const Loadsearch = async () => {
   const stateData = await effects.Api.getInitialSearch(state.searchKey);
   console.log(stateData);
   
   state.searchresults.StockResults = stateData.results;
   state.searchresults.NextUrl = stateData.next_url;
 
 
return state.searchresults.StockResults
 
};
export const searchIsActive=(value:boolean)=>{

state.searchIsActive=value;

}
export const setSearchKey=(value:string)=>{

  state.searchKey=value;
}
export const getCurrentStocks = () => {
    return state.Data.Stocks;

};