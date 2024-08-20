import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from 'firebase/auth'
import { Button, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreatePost from './CreatePost';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILoginPageProps{}

// Component definition with props typing
const Login: React.FC<ILoginPageProps>= () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
    .then(response => {
      localStorage.setItem('isAuth', 'true');
      setAuthing(true);
      navigate('/create');
    } )
    .catch(error => {
      console.log(error);
      setAuthing(false);
    })
  }

  const signInWithFacebook = async () => {
    setAuthing(true);

    signInWithPopup(auth, new FacebookAuthProvider())
    .then(response => {
      localStorage.setItem('isAuth', 'true');
      navigate('/create');
    } )
    .catch(error => {
      console.log(error);
      setAuthing(false);
    })
  }

  return(
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4">Login</h2>
    <Button variant="primary" className="mb-3" onClick={() => signInWithGoogle()} disabled={authing}>Sign in With Google</Button>
    <br/>
    <Button variant="primary"onClick={() => signInWithFacebook()} disabled={authing}>Sign in With Facebook</Button>
    <Nav className="mt-3">
        <Nav.Item>
          <Nav.Link as={Link} to="/register">Don't have an account? Register here</Nav.Link>
        </Nav.Item>
    </Nav>
    </Container>
  )
}

export default Login;
