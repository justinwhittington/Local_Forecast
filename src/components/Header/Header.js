import React from "react";
import "./Header.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar className="NavHeader" color="faded" light>
          <NavbarBrand
            href="/"
            className="mr-auto centerHorizontal"
            id="centerHeader"
          >
            Weather App
          </NavbarBrand>

          <Nav>
            <NavItem>
              <Form>
                <FormGroup id="navSearch">
                  <Input
                    type="search"
                    name="search"
                    id="weatherSearch"
                    placeholder="Durham, North Carolina"
                  />
                  <Button>Submit</Button>
                </FormGroup>
              </Form>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
