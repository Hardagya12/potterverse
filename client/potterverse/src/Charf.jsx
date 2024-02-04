import { useState } from 'react';
import './Charf.css';
import logo from './th1.jpg'
import logo1 from './wal.jpg'
import logo2 from './rec17.jpg'
function Charf() {
    const [count, setCount] = useState(0)
  
    return (
        <>

<div className='header'>
        <div className="left-side">Potter</div>
      <div className="center-logo">
        
         <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto',borderRadius:'5px' }} />
      </div>
      <div className="right-side">Verse</div>
     </div> 
        <div className="navigation-bar">

<a href="#">Quiz</a>
<a href="#">Character Quotient</a>
<a href="#">News</a>
<a href="#">FicFathom</a>
<a href="#">Chamber of Chat</a>
<a href="#">Patronus</a>

</div>


<div className="text-overlay">
                    <h1>Welcome</h1>
                    <p>Embark on a journey through the hallowed halls of Hogwarts as you delve into the lives of your favorite characters. From the courageous Harry Potter himself to the clever Hermione Granger and the loyal Ron Weasley, each character has a tale as captivating as a spell cast by Professor Dumbledore.</p>
                    <a href='#' class="btn">Read more...</a>

                   
</div>

<div className='logo1'>
    <img src={logo1}>

    </img>
</div>
<div className='card'>
    <div className='text1'>
    <img src={logo2} ></img>
    <h1>Severus Snape</h1>
    <a href='#' class='btn'>Read more</a>
    </div>
    </div>
    


    <div className='card1'>
    <div className='text2'>
    <img src={logo2} ></img>
    <h1>Harry James Potter</h1>
    <a href='#' class='btn'>Read more</a>
    </div>
    </div>


    

    <div className='card3'>
    <div className='text3'>
    <img src={logo2} ></img>
    <h1>Ron Weasley</h1>
    <a href='#' class='btn'>Read more</a>
    </div>
    </div>
   

    





    <div className='card4'>
    <div className='text4'>
    <img src={logo2} ></img>
    <h1>Hermoine Granger</h1>
    <a href='#' class='btn'>Read more</a>
    </div>
    </div>
    

    <div className='card3'>
    <div className='text3'>
    <img src={logo2} ></img>
    <h1>Draco Malfoy</h1>
    <a href='#' class='btn'>Read more</a>
    </div>
    </div>



    


        </>
    )}

    export default Charf;