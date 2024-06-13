import React from 'react'
import product from './Product'
import { Name } from './components/Name'
import { Description } from './components/Description'
import { Price } from './components/Price'
import { Image } from './components/Image'
import Button from 'react-bootstrap/Button';
import { ProductCard } from './components/ProductCard'
import { NavbarComponent } from './components/NavbarComponent'






const App = () => {
    const {name,description,image,price}=product

  return (
      
    <div>
      <NavbarComponent/>
      {product.map(el=> <ProductCard product={el}/>)}
      
      {/* <Name name={name}/>
      <Description description={description}/>
      <Price price={price}/>
      <Image source={image}/>
      <Button variant="warning">Warning</Button>{' '} */}
    
    </div>
  )
}

export default App
