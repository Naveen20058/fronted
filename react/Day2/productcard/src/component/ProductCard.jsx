
const ProductCard=(props)=>{
  return(<>
  <div>
    <h2>props:name</h2>
    <p>pricr:{props.price}</p>
    <p>category:{props.category}</p>
    <p>avilability:{props.availability}</p>
  </div>
  </>)
}
export default ProductCard