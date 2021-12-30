import { state } from "./state";
import * as effects from "./effects";

export const loadApp = async () => {
  if (!localStorage.getItem("State")) {
    const stateData = await effects.Api.getInitialStocks();
    state.Data.Stocks = stateData.results;
    state.Data.NextUrl = stateData.next_url;
    localStorage.setItem("State", JSON.stringify(state));
  } else {
    const retrievedData = JSON.parse(localStorage.getItem("State") || "{}");
    state.Data = retrievedData.Data;
  }

  return state.Data.Stocks;
};
export const getNextStockData = async () => {
  if (state.Data.NextUrl != null) {
    const stateData = await effects.Api.nextStockData(state.Data.NextUrl);

    state.Data.Stocks = [...state.Data.Stocks, ...stateData.results];

    state.Data.NextUrl = stateData.next_url;
    localStorage.setItem("State", JSON.stringify(state));
  }

  return state.Data.Stocks;
};
