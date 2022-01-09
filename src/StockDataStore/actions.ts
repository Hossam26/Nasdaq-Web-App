import { state } from "./state";
import * as effects from "./effects";
import { State } from "../Types/State";

export const loadApp = async () => {
  if (!sessionStorage.getItem("State")) {
    const stateData = await effects.Api.getInitialStocks();
    state.data.Stocks = stateData.results;
    state.data.NextUrl = stateData.next_url;
    sessionStorage.setItem("State", JSON.stringify(state));
  } else {
    const retrievedData = JSON.parse(sessionStorage.getItem("State") ||"{}") as State;
    
    state.data = retrievedData.data;
  }

  return state.data.Stocks;
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
  if (state.data.NextUrl != null) {
    const stateData = await effects.Api.getNextStockData(state.data.NextUrl);

    state.data.Stocks = [...state.data.Stocks, ...stateData.results];

    state.data.NextUrl = stateData.next_url;
    sessionStorage.setItem("State", JSON.stringify(state));
  }

  return state.data.Stocks;
};

export const getNextSearchData = async () => {
  
 if (state.searchResults.NextUrl != null) {
   const nextSearchData = await effects.Api.getNextSearchData(state.searchResults.NextUrl);

   state.searchResults.StockResults = [
     ...state.searchResults.StockResults,
     ...nextSearchData.results,
   ];

   state.searchResults.NextUrl = nextSearchData.next_url;
     

 }

   return state.searchResults.StockResults;

};
export const Loadsearch = async () => {
   const searchData = await effects.Api.getInitialSearch(state.searchKey);
   state.searchResults.StockResults = searchData.results;
   state.searchResults.NextUrl = searchData.next_url;
 
 
return state.searchResults.StockResults
 
};
export const searchIsActive=(value:boolean)=>{

state.searchIsActive=value;

}
export const setSearchKey=(value:string)=>{

  state.searchKey=value;
}
export const getCurrentStocks = () => {
    return state.data.Stocks;

};
export const getStockDetails=async(Ticker:string)=>{
  resetStockDetails()
  if (!sessionStorage.getItem(Ticker.concat("Details"))){
 await getPrevDayInfo(Ticker);
 await getCompanyInfo(Ticker).catch((e) => {
   console.log(e);
 });
   sessionStorage.setItem(Ticker.concat("Details"),JSON.stringify(state.stockDetails));
  }
  else{
    state.stockDetails=JSON.parse(sessionStorage.getItem(Ticker.concat("Details"))||"{}")
  }
    
     return state.stockDetails
}
 const getPrevDayInfo = async(ticker:string) => {
    const prevDayData = await effects.Api.getTickerPrevDayInfo(ticker);
    state.stockDetails.TickerPrevDayInfo.ticker = ticker;
    state.stockDetails.TickerPrevDayInfo.close=prevDayData.results[0].c;
    state.stockDetails.TickerPrevDayInfo.open = prevDayData.results[0].o;
    state.stockDetails.TickerPrevDayInfo.low =prevDayData.results[0].l;
    state.stockDetails.TickerPrevDayInfo.high = prevDayData.results[0].h;
    state.stockDetails.TickerPrevDayInfo.volume = prevDayData.results[0].v;


};
 const getCompanyInfo = async (value: string) => {
 
 const name=getStockName(value);
 state.stockDetails.TickerCompanyInfo.Name = name;
 const companyData = await effects.Api.getTickerCompanyInfo(value);
   
   state.stockDetails.TickerCompanyInfo.industry = companyData.industry;
   state.stockDetails.TickerCompanyInfo.companyWebsite = companyData.url;
   state.stockDetails.TickerCompanyInfo.Logo = companyData.logo;
   state.stockDetails.TickerCompanyInfo.Description = companyData.description;
};
 const getStockName =  (Ticker: string) => {
   let name;
  if(!sessionStorage.getItem(Ticker)){    
       const stock = state.data.Stocks.filter(
         (Stock) => Stock.ticker == Ticker
       ); 
   name = stock[0].name as string;
    sessionStorage.setItem(Ticker, JSON.stringify(stock[0].name));
  }
  else{
   name=JSON.parse(sessionStorage.getItem(Ticker)||"")   
  }     
 return name
};
const resetStockDetails=()=>{
   state.stockDetails.TickerCompanyInfo.industry =""
   state.stockDetails.TickerCompanyInfo.companyWebsite ="";
   state.stockDetails.TickerCompanyInfo.Logo ="";
   state.stockDetails.TickerCompanyInfo.Description ="";
   state.stockDetails.TickerPrevDayInfo.ticker = "";
   state.stockDetails.TickerPrevDayInfo.close=null;
   state.stockDetails.TickerPrevDayInfo.open =null;
   state.stockDetails.TickerPrevDayInfo.low = null;
   state.stockDetails.TickerPrevDayInfo.high = null;
   state.stockDetails.TickerPrevDayInfo.volume = null;
}