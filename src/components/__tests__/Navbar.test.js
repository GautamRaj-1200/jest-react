import { render } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
test("Logo should load on rendering Navbar", () => {
  //Load Navbar
  const navbar = render(<Navbar />);
  console.log(navbar);
  //check if logo is loaded
});
