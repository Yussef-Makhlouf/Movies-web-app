import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
function NavigationBar() {
  const favoriteCount = useSelector((state) => state.favoriteMovies.length);

  return (

    <Navbar sticky="top"  bg="dark" variant="dark" expand="lg" className='mb-5'>
      <div className="container">
        <Navbar.Brand as={Link} to="/">Movies-Show</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="m-auto  fs-4 ">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tvshows">TV Shows</Nav.Link>
            

            <Nav.Link as={Link} to="/favorites">
            Favorites ({favoriteCount})

            
             </Nav.Link>

            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
       
          </Nav>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
