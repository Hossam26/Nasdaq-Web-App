import  Splash  from "./SplashScreen";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Navbar",()=>{
it('the navbar appears',async ()=>{ 
      act(() => {
  render(<Splash />)
});
     expect(await screen.findByTestId(/splash-content/i)).toBeVisible()
})
})
