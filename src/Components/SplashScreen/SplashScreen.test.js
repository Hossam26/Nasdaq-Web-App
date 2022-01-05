import  Splash  from "./SplashScreen";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Splash screen",()=>{
test('the Splash screen renders successfully',async ()=>{ 
      act(() => {
  render(<Splash Loading={true} />)
});
     expect(await screen.findByTestId(/splash-content/i)).toBeVisible()
})
})
