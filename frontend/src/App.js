import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';


function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg="gray" variant="gray">
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Registro de Gastos 2$$$</Navbar.Brand>
        </LinkContainer>
        </Container>
        </Navbar>
      </header>
      <main>
        <Container>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
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
