import { Button, Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";


const NavbarCom = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
         
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
              Banglar <span className="text-red-500">T-Shirt</span>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button> Log In</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link >
            <NavLink to={"/"}> Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to={"/about"}> About</NavLink>
          </Navbar.Link>

          <Navbar.Link>
            <NavLink to={"/product"}>Product</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to={"/orderSummry"}>OrderSummery</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCom;
