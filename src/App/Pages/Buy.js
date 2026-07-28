import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Form, Accordion, Spinner } from "react-bootstrap";
import Footer from "../Coponents/Footer/Footer";
import TopNavbar from "../Coponents/Header/TopNavbar";
import "./Buy.css";

function Buy() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [productId]);

  const totalPrice = product.price ? (product.price * quantity).toFixed(2) : 0;

  return (
    <Fragment>
      <TopNavbar />

      <Container className="buy-page-container">
        {loading ? (
          <div className="buy-loader">
            <Spinner animation="border" />
          </div>
        ) : (
          <div className="buy-layout">
            <div className="buy-left-section">
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Product Information</Accordion.Header>
                  <Accordion.Body>
                    <div className="product-info-box">
                      <img
                        className="buy-product-image"
                        src={product.image}
                        alt={product.title}
                      />

                      <div>
                        <h2>{product.title}</h2>
                        <p className="buy-category">{product.category}</p>
                        <h3 className="buy-price">${product.price}</h3>
                        <p className="buy-description">{product.description}</p>

                        <div className="quantity-box">
                          <label>Quantity</label>
                          <Form.Select
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(Number(e.target.value))
                            }
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Delivery Address</Accordion.Header>
                  <Accordion.Body>
                    <Form className="address-form">
                      <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter full name"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter mobile number"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="House no, street, city"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" placeholder="Enter pincode" />
                      </Form.Group>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Payment Method</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Form.Check
                        type="radio"
                        name="payment"
                        label="Cash on Delivery"
                        defaultChecked
                      />
                      <Form.Check
                        type="radio"
                        name="payment"
                        label="UPI Payment"
                      />
                      <Form.Check
                        type="radio"
                        name="payment"
                        label="Credit / Debit Card"
                      />
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="buy-right-section">
              <div className="summary-card">
                <h3>Order Summary</h3>

                <div className="summary-row">
                  <span>Product Price</span>
                  <span>${product.price}</span>
                </div>

                <div className="summary-row">
                  <span>Quantity</span>
                  <span>{quantity}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery</span>
                  <span className="free-text">Free</span>
                </div>

                <hr />

                <div className="summary-total">
                  <span>Total Amount</span>
                  <span>${totalPrice}</span>
                </div>

                <Button className="place-order-btn">Place Order</Button>
                <Button variant="outline-dark" className="cart-btn">
                  Add to Cart
                </Button>

                <p className="secure-text">Secure checkout guaranteed</p>
              </div>
            </div>
          </div>
        )}
      </Container>

      <Footer />
    </Fragment>
  );
}

export default Buy;
