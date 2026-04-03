export default function ProductCard(props) {
  
   console.log(props)
 
  return (
    

    <div>
      <img src = {props.src} />
      <h1>Name : {props.name}</h1>
      
      <h3>Price :{props.price}</h3>
      
      <button>Buy Now</button>
    </div>
  );
}