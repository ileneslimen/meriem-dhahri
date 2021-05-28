
import './home.scss'
import $ from 'jquery'
import { Link } from "react-router-dom";

const Home =()=>{

    $(document).ready(function(){
        $('#addtocart').on('click',function(){
          
          var button = $(this);
          var cart = $('#cart');
          var cartTotal = cart.attr('data-totalitems');
          var newCartTotal = parseInt(cartTotal) + 1;
          
          button.addClass('sendtocart');
          setTimeout(function(){
            button.removeClass('sendtocart');
            cart.addClass('shake').attr('data-totalitems', newCartTotal);
            setTimeout(function(){
              cart.removeClass('shake');
            },500)
          },1000)
        })
      })
 
   return (
       <>
    <div id="cart" class="cart" data-totalitems="0">
    <Link to='/mycard'>  <i class="fas fa-shopping-cart"></i> </Link>
</div>

<div class="page-wrapper">
    
 <button id="addtocart">
  <img src='/img.jpg' alt='..' />
  
   <span class="cart-item"></span>
      
  </button>
 
</div>
   </>
   )
   
   
   
}
export default Home