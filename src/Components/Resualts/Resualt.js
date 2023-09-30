import './Resualts.css';
import {useState} from 'react';
import {evaluate} from 'mathjs';
function Resualt (){
    let [natije , setNatije] = useState("");
    let [hasdot , setHasdot] = useState(false)
    let opraitores = ["+" , "-" , "*" , "/"]
    const clickhandeler = (e)=>{
     let  input =  e.target.innerText
     if(input === '.'){
      if(hasdot === true) return 
      else{
         setHasdot(true)
      }
     };
     if(opraitores.includes(input) ) {
      setHasdot(false)
     }

       setNatije( natije + input)






    }
  const Ophandeler = (e)=>{

   if(e.target.innerText === "Clear") {setNatije("");    setHasdot(false)};
     if(e.target.innerText === "C") {
      if(natije.endsWith(".")){setHasdot(false)}
      setNatije(natije.slice(0 , -1))
      
   };
     if(e.target.innerText === "="){
       setNatije(String(evaluate(natije)))
       setHasdot(false);
     }
  }
    return(
        <>
        <h1 className='resualts'> {natije} </h1>
        <div className='BtnC'>
        <div className='btns'>
        <button  onClick={Ophandeler} className='clear'>Clear</button>
        <button onClick={Ophandeler}>C</button>
        <button onClick={clickhandeler}>/</button>    
     </div>

     <div className='btns'>
        <button onClick={clickhandeler}>7</button>
        <button onClick={clickhandeler}>8</button>
        <button onClick={clickhandeler}>9</button>
        <button onClick={clickhandeler}>*</button>    
     </div>

     <div className='btns'>
        <button onClick={clickhandeler}>4</button>
        <button onClick={clickhandeler}>5</button>
        <button onClick={clickhandeler}>6</button>
        <button onClick={clickhandeler}>-</button>    
     </div>

     <div className='btns'>
        <button onClick={clickhandeler}>1</button>
        <button onClick={clickhandeler}>2</button>
        <button onClick={clickhandeler}>3</button>
        <button onClick={clickhandeler}>+</button>    
     </div>

     <div className='btns'>
        <button onClick={clickhandeler}>0</button>
        <button onClick={clickhandeler}>.</button>
        <button  onClick={Ophandeler} className='awnser' >=</button>
     </div>
     </div>
     </>
    )
}



export default Resualt