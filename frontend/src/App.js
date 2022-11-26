import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Nav from 'react-bootstrap/Nav';
import { Store } from './Store';
import { useContext } from 'react';
import CarScreen from './screens/CarScreen';


function App() {
  const { state } = useContext(Store);
  const { car } = state;
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg="gray" variant="gray">
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Registro de Gastos 2$$$</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <Link to="/car" className="nav-link">
            Carrito de pagos
            {car.carItems.length > 0 && (
              <Badge pill bg="danger">
              {car.carItems.reduce(( a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
        </Nav>
        </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt=3">
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/car" element={<CarScreen/>}/>
        </Routes>
        </Container>
        
      </main>
      <footer>
        <div className="text-center"> Derechos reservados AFGP </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
