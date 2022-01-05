import  StockList  from "./StockList";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
//disable the Link tag first 
describe("Stock List",()=>{
test('the Stock list appears successfully',async ()=>{ 
    let stock=[{
        ticker:"AAPL",
        name:"Apple"
    }]
      act(() => {
  render(<StockList 
    stocks={stock}
        isLoadingStocks={false}
        getNextStockData={()=>{}}
    
    />)
});
     expect(await screen.findByTestId(/stockList/i)).toBeVisible()
})
})
