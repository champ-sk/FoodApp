import { fireEvent, render ,screen } from "@testing-library/react"
import  "@testing-library/jest-dom"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../utils/appStore"

it("Should render header component with the login button" , ()=>{
    render(  <Provider store={store}>
       <BrowserRouter>
        <Header />
      </BrowserRouter>
      </Provider>);

    //querying
   const login =  screen.getByText("Login");
    //assertion
    expect(login).toBeInTheDocument();
})

it("Should check whether the logout button is fired or not" , ()=>{
    render(  <Provider store={store}>
       <BrowserRouter>
        <Header />
      </BrowserRouter>
      </Provider>);

    //querying
   const login =  screen.getByRole("button",{name: 'Login'});
   fireEvent.click(login);
   const logout = screen.getByRole("button", {name: 'Logout'});
    //assertion
    expect(logout).toBeInTheDocument();
})