/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { logout } from "Provider/Auth";

var ps;

class Sidebar extends React.Component {
  state = {
    collapseOpen: false,
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false,
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <NavItem key={key}>
            <NavLink
              to={prop.layout + prop.path}
              tag={NavLinkRRD}
              onClick={this.closeCollapse}
              activeclassname="active"
            >
              <i className={prop.icon} />

              <div className="text-white">{prop.name}</div>
            </NavLink>
          </NavItem>
        );
      } else if (prop.name === "Logout") {
        return (
          <NavItem key={key}>
            <NavLink
              className="cursor-clickable"
              onClick={() => {
                this.closeCollapse;
                logout();
                window.location.href = "/";
              }}
              activeclassname="active"
            >
              <i className={prop.icon} />
              <div className="text-white">{prop.name}</div>
            </NavLink>
          </NavItem>
        );
      }
    });
  };
  render() {
    const { bgColor, routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link,
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank",
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-default"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <i className="ni ni-bold-right text-white" />
          </button>
          {/* Brand */}
          {logo ? (
            <React.Fragment>
              <NavbarBrand className="pt-0" {...navbarBrandProps} width="100px">
                <img
                  alt={logo.imgAlt}
                  className="navbar-brand-img"
                  src={logo.imgSrc}
                />
              </NavbarBrand>
            </React.Fragment>
          ) : null}
          {/* Collapse */}
          <Collapse
            navbar
            isOpen={this.state.collapseOpen}
            className=" bg-default"
          >
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img
                          alt={logo.imgAlt}
                          src={logo.imgSrc}
                          className="float-left mx-1"
                        />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img
                          alt={logo.imgAlt}
                          src={logo.imgSrc}
                          className="float-left mx-1"
                        />
                      </a>
                    )}
                  </Col>
                ) : null}

                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler "
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span className="bg-white" />
                    <span className="bg-white" />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Navigation */}
            <Nav navbar>{this.createLinks(routes)}</Nav>
            {/* Divider */}
            <hr className="my-3" />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
