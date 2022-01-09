import axios, { CancelTokenSource } from "axios";
import {
  apiKey,
  apiStockUrl,
  apiSearchUrl,
  tickerPrevDayApi,
  tickerCompanyDetailsApi
} from "../react-app-env";
let cancelToken: CancelTokenSource;
export const Api = {
  getInitialStocks: async () => {
    const stockApiResponse = await axios.get(`${apiStockUrl}&apiKey=${apiKey}`);
   
    
    return stockApiResponse.data;
  },
  getNextStockData: async (nextUrl: string) => {
    const stockApiResponse = await axios.get(`${nextUrl}&apiKey=${apiKey}`);
    return stockApiResponse.data;
  },
  getInitialSearch: async (searchKey: string) => {
    if (cancelToken) {
      cancelToken.cancel("operation cancelled");
    }
    cancelToken = axios.CancelToken.source();

    const stockApiResponse = await axios.get(
      `${apiSearchUrl}${searchKey}&limit=50&apiKey=${apiKey}`,
      { cancelToken: cancelToken.token }
    );

    return stockApiResponse.data;
  },
  getNextSearchData: async (nextUrl: string) => {
    const tockApiResponse = await axios.get(`${nextUrl}&apiKey=${apiKey}`);
    return tockApiResponse.data;
  },
  getTickerPrevDayInfo: async (Ticker: string) => {
    const prevDayResponse = await axios.get(`${tickerPrevDayApi}${Ticker}/prev?apiKey=${apiKey}`);
   
    
    return prevDayResponse.data;
  },
  getTickerCompanyInfo: async (Ticker: string) => {
    const companyResponse = await axios.get(`${tickerCompanyDetailsApi}${Ticker}/company?apiKey=${apiKey}`);
  
    return companyResponse.data;
  },
  
};
