
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import{useState} from 'react'
function App() {

  const[product,setProduct] = useState([
    {
      url: 'https://images.bestsellerclothing.in/data/JJ/dec-20-2022/128855103_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto',
      name: 'TRQ white Shoes',
      category: 'AHZ Seller Ghz',
      price: 1999

    },


  ])
   

  return (
   <div>
      <Header></Header>
    <ProductList/>   </div>
  );
}

export default App;
