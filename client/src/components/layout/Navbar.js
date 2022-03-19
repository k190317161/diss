import React, { Component, useState, useEffect, Fragment } from 'react'
import { Menu, Segment, Button } from 'semantic-ui-react'
import '../../css/layout.css'
// import Login from '../login/Login'
// import RegistrationForm from '../login/RegistrationForm'

const Navbar = (props) => {

  

    const [isAuth, setIsAuth] = useState(false);
    const [activeItem, setItem] =  useState('dashboard');

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  

  

  
   return (

    
    <div>
       <Menu pointing secondary>
         <Menu.Item
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={() => setItem('dashboard')}
          inverted compact href='/dashboard'
        />
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={() => setItem('login')}
          inverted compact href='/login'
        />
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={() => setItem('logout')}
          inverted compact href='/logout'
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            onClick={() => setItem('signup')}
            inverted compact href='/signup'
          />
        </Menu.Menu>
      </Menu>

      
    </div>
  )
}

  

export default Navbar

