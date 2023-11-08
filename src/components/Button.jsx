/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CalcContext } from "../context/CalcContext"

const getStyleName = btn =>{
  const className = {
    '=' : 'equals',
    'x' : 'opt',
    '-' : 'opt',
    '+' : 'opt',
    '/' : 'opt',
    'C' : 'grey',
    '+/-' : 'grey plusMinus',
    '%' : 'grey'
  }
  return className[btn]
}

const Button = ({value}) => {
  const {calc, setCalc } =useContext(CalcContext);

  // comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }

  // C
  const resetClick = () => {
    setCalc({sign: '', num: 0, res:0})
  }

  //Any Number
  const handleClickButton = () => {
    const numberString = value.toString()

    if (calc.num.toString().length>= 10) return

    let numberValue;
    if(numberString==='0' && calc.num === 0){
      numberValue = "0"
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }
  
  // Any Operation
const signClick = () => {
  setCalc({
    sign: value,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0
  })
}

// equals
const equalsClick = () =>{
  if(calc.res && calc.num){
    const math = (a, b, sign) => {
      const result = {
        '+' : (a, b) => a+b,
        '-' : (a, b) => a-b,
        'x' : (a, b) => a*b,
        '/' : (a, b) => a/b,
      }
      return result[sign](a, b);
    }
    setCalc({
      res: math(calc.res, calc.num, calc.sign),
      sign: '',
      num: 0
    })
  }
}

// percentage
const percentClick = () => {
  setCalc({
    num: (calc.num / 100),
    res: (calc.res / 100),
    sign: ''
  })
}

//invert button
const invertClick = () => {
  setCalc({
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: ''
  })
}

//Deletes last digit - right to left ⤆
const delClick = () => {
  setCalc({...calc, num: calc.num.toString().slice(0, calc.num.toString().length -1)})
}

  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
      '%': percentClick,
      '+/-': invertClick,
      '⤆': delClick
    }
    if(results[value]){
      return results[value]()
    }else{
      return handleClickButton()
    }
  }
  return <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>;
};

export default Button;
