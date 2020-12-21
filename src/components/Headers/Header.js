import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-primary pt-5">
          <Container fluid></Container>
        </div>
      </>
    );
  }
}

export default Header;
