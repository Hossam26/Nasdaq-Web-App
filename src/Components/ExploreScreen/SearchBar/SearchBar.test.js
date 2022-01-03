import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { act } from "react-dom/test-utils";
describe("search bar",()=>{
it('the search bar appears',async()=>{
  
  render(<SearchBar />)

     expect(await screen.findByPlaceholderText(/Search by stock ticker/i)).toBeVisible()
})
})

