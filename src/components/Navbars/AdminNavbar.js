import React from "react";
// reactstrap components
import { Navbar, Container } from "reactstrap";

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <div className="text-white">
              <b>{this.props.brandText}</b>
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
