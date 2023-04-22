import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  // define email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // to access to the context that created in 'Store.js'
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    // to prevent refreshing the page when user click on 'signin' button
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/signin", {
        email,
        password,
      });
      // call the function reducer from 'Store.js' and save user's info and token in 'userInfo' in 'Store.js'
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      // save user's info in local storage
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  // By implement this code,
  // when user already login, '/api/signin' doesn't exist and user will be redirected to home or previous page
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
      </Form>
      <div className="mb-3">
        <Button type="submit" onClick={submitHandler}>
          Sign In
        </Button>
      </div>
      <div className="mb-3">
        New customer?{"  "}
        <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
      </div>
      {/* <div className="mb-3">
        Forget Password? <Link to={`/forget-password`}>Reset Password</Link>
      </div> */}
    </Container>
  );
}
