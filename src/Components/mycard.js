import { useDispatch ,useSelector} from 'react-redux'
import {increment,decrement, favoris, deleteitem} from '../JS/actions'
import './mycard.css'
const MyCard =()=>{
  const dispatch=useDispatch()
  const c = useSelector((state) => state.count);
  const price = useSelector((state) => state.item.price);
  const togglee = useSelector((state) => state.toggle);
  const totalp = useSelector((state) => state.totalprice);
 
    return(<div className='body'>
 
   
    <main>
      <section class="shopping-card">
        <div class="total-price-container">
          <span>Prix Total :</span>
          <span class="total-price"> {Number(price*c)}</span>
          <span>DT</span>
        </div>
        <div class="cards-container">
       
          <div class="card" >
            <img
              src="./img.jpg"
              class="card-img-top"
              alt="baskets"
            />
            <div class="card-body">
            
              <span class="unit-price">{price}</span>
              <span>DT</span>
            </div>
            <div class="card-body">
              <i class="fas fa-plus-circle plus-btn"    onClick={() => dispatch(increment())} ></i>
              <span class="qute"> {c}</span>
              <i class="fas fa-minus-circle minus-btn" onClick={() => dispatch(decrement())} ></i>
            </div>
         <select  style={{marginBottom: '20px'}} >
         <option>Choisissez votre couleur</option>
           <option>Rouge</option>
           <option>bleu</option>
           <option>blanc</option>
           <option>noir</option>
           <option>jaune</option>
         </select>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"  style={{display: 'flex'}} >
                <i class="fas fa-heart"  onClick={() => dispatch(favoris())} style={{color: togglee? 'red': 'black'}}     ></i>
    
              </li>
            </ul>
          </div>

      
       
        </div>
      </section>
    </main>

  
 

  
    </div>)
}
export default MyCard