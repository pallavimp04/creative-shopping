import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
import "./HeaderSlider.css";
function HeaderSlider() {
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="https://as2.ftcdn.net/v2/jpg/03/07/11/67/1000_F_307116788_TJYY26iIu5bpFVYxi9qbLgbH8sVjn2h7.jpg"
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure Ladies Shoulder Bag </h5>
            <p>
              Discover Elegant Shoulder Bags for Women. Elevate your style
              effortlessly with our curated collection of shoulder bags for
              women.
            </p>
            <div className="mb-3">
              <Button variant="primary">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="https://as2.ftcdn.net/v2/jpg/00/92/85/89/1000_F_92858949_ZbjEGZKxqhEqMJXjC6EMHCHmtGctUaYt.jpg"
            alt="pure mustard oil"
          />
          <Carousel.Caption className="bg-white">
            <h5>100% Cotton Men Clothing</h5>
            <p>Shop New Arrivals Men at Creative Shopping.</p>
            <div className="mb-3">
              <Button variant="primary">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="https://as1.ftcdn.net/v2/jpg/02/95/68/46/1000_F_295684609_tGIoWwuZNPc3FWX8GNnC1Osql3zHlygU.jpg"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Decorate Your Smart Kitchen</h5>
            <p>Shop kitchen items to decorate your home.</p>
            <div className="mb-3">
              <Button variant="primary">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HeaderSlider;
