import { Stock } from "./Stock";
import { TickerPrevDayInfo } from "./TickerPrevDayInfo";
import { TickercompanyInfo } from "./TickerCompanyInfo";
export type State={
    Data:{
     Stocks:Stock[],
        NextUrl:string,
        
    }
  
}