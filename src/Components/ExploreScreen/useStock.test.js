import { useStock } from "./useStock";
import {act, renderHook} from "@testing-library/react-hooks"

let intitialDataLimit=50;
//integration test
describe("useStock functions",()=>{
    it("get initial stock data",async()=>{
        const {result}= renderHook(useStock)
               

     await act(async()=>{
          await  result.current.getStockData()

        })
        expect(result.current.stocks.length).toEqual(intitialDataLimit)
    })
     it("get next stock data",async()=>{
        const {result}= renderHook(useStock)
               

     await act(async()=>{
          await  result.current.getNextData()

        })
        expect(result.current.stocks.length).toBeGreaterThan(intitialDataLimit)
    })

         it("get initial search query",async()=>{
        const {result}= renderHook(useStock)
        const searchKey="A"       

     await act(async()=>{
         result.current.searchIsActive(true)
          await  result.current.getSearchResults(searchKey)

        })
        expect(result.current.stocks.length).toEqual(intitialDataLimit)
    })
     it("get next search stock data",async()=>{
        const {result}= renderHook(useStock)
               

     await act(async()=>{
          await  result.current.getNextData()

        })
        expect(result.current.stocks.length).toBeGreaterThan(intitialDataLimit)
    })
    


})

 
 