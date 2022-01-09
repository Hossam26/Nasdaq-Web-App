import { useStockDetails } from "./useStockDetails";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useStockDetails function", () => {
  const ticker = "AAPL";
  it("get stock details data", async () => {
    const { result } = renderHook(useStockDetails);

    await act(async () => {
      await result.current.getStockDetails(ticker);
    });

    expect(result.current.stockPrevDayInfo.volume).not.toBeNull();
    expect(result.current.stockPrevDayInfo.high).not.toBeNull();
    expect(result.current.stockPrevDayInfo.low).not.toBeNull();
    expect(result.current.stockPrevDayInfo.open).not.toBeNull();
    expect(result.current.stockPrevDayInfo.close).not.toBeNull();
  });
});
