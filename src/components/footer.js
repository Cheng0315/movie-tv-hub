import React from 'react';
import '../css/footer.css';
 
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div id='footer'>
      Copyright &copy; {year}  Cheng Vue
    </div>
  )
}

export default Footer