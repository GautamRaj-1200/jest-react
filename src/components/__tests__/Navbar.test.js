import { render } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
test("Logo should load on rendering Navbar", () => {
  //Load Navbar
  const navbar = render(<Navbar />);

  //check if logo is loaded
  const logo = navbar.getAllByTestId("navbar-logo");
  console.log(logo[0]);
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});
