import React, {useState} from "react";
import {auth} from ".././firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";


export default function Login() {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});


      // This is onAuthStateChanged 

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  
const login = async (e) => {
    e.preventDefault();
    try{
        setError("")
        setLoading(true)
        const user = signInWithEmailAndPassword(auth, email, password)
        history.push("/")
        console.log(user);
    } catch(error) {
        alert(error.message)
    }
    setLoading(false)
}


//Logout
const logout = async (e) => {
    e.preventDefault();
    await signOut(auth);
  }


    return (
        <>
                <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                <h4>{user?.email}</h4>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} 
                         required />
                    </Form.Group>
                    <Button disabled={loading} onClick={login} className="w-100" type="submit">Login</Button>
                   
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password</Link>
                </div>
            </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
      </div>
      </Container>

        </>
    )
}
