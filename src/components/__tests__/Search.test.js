import { render, act, screen, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import mockRes_data from "../MockData/mockResListData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

// Mock the fetch call
global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true, // Simulate a successful response
      json: () => Promise.resolve(mockRes_data),
    })
  );
  

it("Should trigger the search and render the body component", async () => {
  // Use act to ensure all async operations complete
  await act(async () => render(
  <BrowserRouter>
  <Body />
  </BrowserRouter>));

  // Wait for the button to appear after fetching the data
  const searchBtn = await screen.findByRole("button", { name: /search/i });
//get the input search box
 const inputSearch = screen.getByTestId('inputSearch');
 //fire onchange event on the search box
 fireEvent.change(inputSearch,{target:{value:"pizza"}});
 //now fire the click event on search btn
 fireEvent.click(searchBtn);
 //now find the res card on the screen(resCard)
 const resCards = screen.getAllByTestId('resCard');
 //now compare the count of resCard
 expect(resCards.length).toBe(4);
  console.log(searchBtn);

  // Ensure the search button is in the document
  expect(searchBtn).toBeInTheDocument();
});
