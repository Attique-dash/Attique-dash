import React, {useState} from 'react';
import "./Calucalater.css"

 function Calucalater() {
 const [result, setResult] = useState('');
 const [expression, setExpression] = useState('');

 const handelButtonClick = (value)=> {
 if(value === '='){
  try {
    const evalResult = (expression).toString();
    setResult(evalResult);
    setExpression(evalResult);
  } catch (error) {
    setResult('Error');
  }
 }else if (value === 'C'){
  setResult('');
  setExpression('');
 }else{
  setExpression((prevExpression) => prevExpression + value);
 }
 };

 const buttons = [
  '7','8','9','/',
  '4','5','6','*',
  '1','2','3','-',
  '0','.','=','+',
  'C'
 ];

  return (
    <main className='maincal'>
      <h1 className='calname'>Calucalater</h1>
      <div className='clainp'>
      <input 
      type='text'
      className='calinp1'
      value={expression}
      readOnly
      />
      <input 
      type='text'
      className='calinp2'
      value={result}
      readOnly
      />
      <div className='showcal'>
       {buttons.map((btn)=>(
        <buttons
         key={btn} 
         onClick={()=> handelButtonClick(btn)}
         className = 'showcal1'
         >
        {btn}
        </buttons>
       ))}
      </div>
      </div>
    </main>
  )
}

export default Calucalater;