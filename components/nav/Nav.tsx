import React from 'react'
import Link from 'next/link'

const Nav = () =>{ 
  return (
  <>
  <nav className="nav__wrapper">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/favorites">
      <a>Favoritos</a>
    </Link>
    <Link href="/search">
      <a>Buscar</a>
    </Link>
  </nav>
  <style jsx>{`
    .nav__wrapper{
      background: #0b84ff; /* Old browsers */
      background: -moz-linear-gradient(top,  #0b84ff 0%, #6530dd 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  #0b84ff 0%,#6530dd 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  #0b84ff 0%,#6530dd 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0b84ff', endColorstr='#6530dd',GradientType=0 ); /* IE6-9 */

      box-sizing:border-box;
      padding: 16px 16px;
    }
    .nav__wrapper a{
      text-decoration: none;
      margin-right: 16px;
      color:white;
      font-family: 'Helvetica Neue';
      letter-spacing: 1px;
    }
  `}</style>
  </>
)}

export default Nav
