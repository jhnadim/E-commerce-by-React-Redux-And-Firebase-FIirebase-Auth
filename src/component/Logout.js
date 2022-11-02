import React, {useState} from "react";
import {auth} from ".././firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "react-bootstrap";
import Products from './Products'




export default function Logout(){

        const [user, setUser] = useState({});

  // This is onAuthStateChanged 

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

    const logout = async (e) => {
        e.preventDefault();
        await signOut(auth);
        
      }

      return(
          <>
            <div align="center">
            <h1>Are you sure?</h1>  
                <Button onClick={logout} className="login_logout">YES</Button> <Button>NO</Button>    
               
            </div>
            
          </>
      )
}