import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NewsLinks from "../Pages/Shared/NewsLinks/NewsLinks";
import SocialMedia from "../Pages/Shared/SocialMedia/SocialMedia";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="m-5">
        <Row>
          <Col lg="2">
            <NewsLinks></NewsLinks>
          </Col>
          <Col lg="7">
            
            <Outlet></Outlet>
            <Footer></Footer>
          </Col>
          <Col lg="3">
            <SocialMedia></SocialMedia>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
