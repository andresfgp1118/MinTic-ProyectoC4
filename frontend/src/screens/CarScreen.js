import { useContext } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MessageBox from "../components/MessageBox";
import Card from 'react-bootstrap/Card';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";


export default function CarScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    car: { carItems },
  } = state;

  return (
    <div>
      <Helmet>
        <title>Carrito de Compras</title>
      </Helmet>
      <h1>Carrito de Compras</h1>
      <Row>
        <Col md={8}>
          {carItems.length === 0 ? (
            <MessageBox>
              Carrito de Pagos Vacio <Link to="/"> Realiza tus pagos</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {carItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>
                      {""}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button variant="light" disable={item.quantify === 1 }>
                        <i className= "fa fa-minus-circle"> </i>
                      </Button>{' '}
                      <span>{item.quantify}</span>{' '}
                      <Button variant="light" disable={item.quantify === item.countInStock }>
                        <i className= "fa fa-plus-circle"> </i>
                      </Button>

                    </Col>
                    <Col md={3}>${item.price}</Col>
                    <Col md={2}>
                    <Button variant="light">
                        <i className= "fa fa-trash"> </i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  Subtotal ({carItems.reduce((a, c) => a + c.quantify, 0)}{' '}
                  item) : $
                  {carItems.reduce((a, c) => a + c.price * c.quantify, 0)}
                </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button 
                type = "button" 
                variant = "primary"
                disable = {carItems.length === 0}
                >
                  Checkout  
                </Button>

              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </div>
  );
}
