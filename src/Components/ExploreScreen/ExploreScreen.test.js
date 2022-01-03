import { render, screen } from "@testing-library/react";
import ExploreScreen from "./ExploreScreen";

describe("loading spinner",()=>{

it('on initial render, the loading spinner appear to notify the user that there is something is bieng fetched ', ()=>{
   
  render(<ExploreScreen />)
 
   expect( screen.getByTestId(/spinner/i)).toBeVisible()

})
})
