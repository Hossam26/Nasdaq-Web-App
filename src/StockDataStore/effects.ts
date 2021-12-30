import axios from "axios";
import { apiKey,apiStockUrl } from "../react-app-env";
export const Api={
getInitialStocks: async ()=>{
    const StockApiResponse= await axios.get(`${apiStockUrl}&apiKey=${apiKey}`)
   return StockApiResponse.data
}
,
nextStockData: async (nextUrl:string)=>{
    const StockApiResponse= await axios.get(`${nextUrl}&apiKey=${apiKey}`)
    return StockApiResponse.data
}
}