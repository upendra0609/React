import React from 'react';
import { Link,Outlet } from 'react-router-dom';

export default function Contact() {
  return (
    <div style={{marginTop:150}}>
        <h1>Contact</h1><br/><br/>
            <Link to={'insta'}>
                <h3>Contact via instagram</h3>
            </Link>
            <Link to={'mail'}>
                <h3>Contact via mail</h3>
            </Link>
            <Outlet/>
    </div>
  )
}
