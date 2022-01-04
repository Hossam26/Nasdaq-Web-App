import axios, { CancelTokenSource } from "axios";
import { apiKey, apiStockUrl, ApiSearchUrl } from "../react-app-env";
let cancelToken: CancelTokenSource;
export const Api = {
  getInitialStocks: async () => {
    const StockApiResponse = await axios.get(`${apiStockUrl}&apiKey=${apiKey}`);
    return StockApiResponse.data;
  },
  nextStockData: async (nextUrl: string) => {
    const StockApiResponse = await axios.get(`${nextUrl}&apiKey=${apiKey}`);
    return StockApiResponse.data;
  },
  getInitialSearch: async (searchKey:string) => {
      

       if (cancelToken) {
         cancelToken.cancel("operation cancelled")
       }
             cancelToken = axios.CancelToken.source();

    const StockApiResponse = await axios.get(`${ApiSearchUrl}${searchKey}&limit=50&apiKey=${apiKey}`,{cancelToken:cancelToken.token});
    
   
    
    return StockApiResponse.data;
  },
  nextSearchData: async (nextUrl: string) => {
    const StockApiResponse = await axios.get(`${nextUrl}&apiKey=${apiKey}`);
    return StockApiResponse.data;
  },
};