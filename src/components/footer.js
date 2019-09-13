import React from 'react'
 
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div>
      Copyright &copy; {year}  Cheng Vue
    </div>
  )
}

export default Footer