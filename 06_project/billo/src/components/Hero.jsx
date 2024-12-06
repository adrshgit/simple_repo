import React from 'react'

const Hero = () => {
  return (
    <div className='content'>
      <div className="left">
        <h1>Invoice Generator App </h1>
        <p>Genrate the invoices of your customers easily and quickly</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque iusto sit autem delectus perspiciatis aliquam iure voluptate quia recusandae molestias ratione minima, inventore a, aliquid officiis! Soluta, provident quasi.</p>
        <button>Get Started</button>
      </div>
      <div className="right">
        <img src="/src/assets/invoice.png" alt="" />
      </div>

    </div>
  )
}

export default Hero