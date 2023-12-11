import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Tab, Nav } from "react-bootstrap";
import { SignUp } from "../../components/authentication/signUp";
import { LogIn } from "../../components/authentication/logIn";
import toast, { Toaster } from "react-hot-toast";
import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    if (userInfo) {
      toast.success("user exist");
      // navigate("/chats");
    }
  }, [navigate]);

  return (
    <div className="app">
      <Container className="mainContainer">
        <Tab.Container defaultActiveKey="tab1">
          <Nav
            variant=""
            className=" d-flex justify-content-around align-content-center "
          >
            <Nav.Item>
              <Nav.Link className="link-dark" eventKey="tab1">
                Log In
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link-dark" eventKey="tab2">
                Sign Up
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="tab1">
              <LogIn />
            </Tab.Pane>
            <Tab.Pane eventKey="tab2">
              <SignUp />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <Toaster position="top-center" reverseOrder={false} />
      </Container>
    </div>
  );
};
