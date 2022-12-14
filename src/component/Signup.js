import React, {useState} from "react";
import {auth} from ".././firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";


export default function Signup() {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpass, setConpass] = useState('');
    const [user, setUser] = useState({});


      // This is onAuthStateChanged 

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  
  const register = async (e) => {
    e.preventDefault();
            if (password !==
                conpass) {
            return setError('Password do not match')
        }

    try{
        setError("")
        setLoading(true)
        const user = createUserWithEmailAndPassword(auth, email, password)
        history.push("/")
        console.log(user);
    }catch(error){
        alert(error.message)
    }
    setLoading(false)
    }


    return (
        <>
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"  value={password} onChange={(e) => {setPassword(e.target.value)}} required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirm</Form.Label>
                                    <Form.Control type="password" value={conpass} onChange={(e) => {setConpass(e.target.value)}} required />
                                </Form.Group>
                                <Button disabled={loading} onClick={register} className="w-100" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}
