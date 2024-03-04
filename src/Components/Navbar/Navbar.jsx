import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    var [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img  className="logoimg" src={logo} alt=""/>
        <p><b>ShopperStop</b></p>
      </div>
      <ul className='navbar-menu'>
         <li onClick={()=>{ setMenu("shop")}}><Link style = {{textDecoration : 'none'}} to = '/'>Shop</Link>{menu==="shop"? <hr/> : <></>} </li>
         <li onClick={()=>{ setMenu("womens")}}><Link style = {{textDecoration : 'none'}} to = '/womens'>Women</Link>{menu==="womens"? <hr/> : <></>} </li>
         <li onClick={()=>{setMenu("mens")}}><Link style = {{textDecoration : 'none'}} to = '/mens'>Men</Link>{menu==="mens"? <hr/> : <></>} </li>
         <li onClick={()=>{setMenu("kids")}}><Link style = {{textDecoration : 'none'}} to = '/kids'>Kids</Link>{menu==="kids"? <hr/> : <></>} </li>
      </ul>
      <div className='navbar-login'>
        <Link to ="/login"><button >Login</button> </Link>  
        <Link to ="/cart"><img className="cartimg" src= {cart} alt= ""/> </Link> 
         <div className='navbar-cart-count'>0</div>
      </div>
        
    </div>
  )
}

export default Navbar


