import '../App.css';

function Header() {
  return (
   <div className='flex shopping-cart'>
    <div>Shopping cart</div>
    <div>Cart
        <sup> {'3'} </sup>
    </div>
   </div>
  );
}

export default Header;  