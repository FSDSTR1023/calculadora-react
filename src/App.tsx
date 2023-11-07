// import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';

const cleanEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
  const e = event.target as HTMLButtonElement;
  const value = e.dataset.value;
  return value;
};

const App = () => {

  const [result, setResult] = useState('0')
  const [operation, setOperation] = useState('')

  const printDisplay = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = cleanEvent(event);
    setOperation(prev => prev += value)
  }

  const clearDisplay = () => {
    setOperation('');
    setResult('');
  }

  const backspace = () => {
    const arr = operation.split('');
    arr.pop();
    const newValue = arr.join('');
    setOperation(newValue);
  }

  const showResult = () => {
    try {
      const result = eval(operation);
      setResult(result);
    } catch (error) {
      const errorMessage = (error as { message: string; stack: string }).stack.split(':')[0]
      setResult(errorMessage)
    }

  }

  return (
    <>
      <div className='container'>

        <div className='p-2 rounded-lg bg-gradient-to-r bg-circle from-slate-400 to-teal-700 mb-3  max-w-4xl'>
          <div className='text-right bg-gray-700 p-4 rounded-md'>
            <Display textContent={result} />
            <Display textContent={operation} muted />
          </div>
        </div>

        <div className='grid grid-cols-4 grid-rows-5 gap-3'>
          <Button value='c' action={clearDisplay} textContent='c' dark />
          <Button value='<-' action={backspace} textContent='&larr;' dark />
          <Button value='/100*' action={printDisplay} textContent='%' dark />
          <Button value='/' action={printDisplay} textContent='/' dark />
          <Button value='7' action={printDisplay} textContent='7' />
          <Button value='8' action={printDisplay} textContent='8' />
          <Button value='9' action={printDisplay} textContent='9' />
          <Button value='*' action={printDisplay} textContent='*' dark />
          <Button value='4' action={printDisplay} textContent='4' />
          <Button value='5' action={printDisplay} textContent='5' />
          <Button value='6' action={printDisplay} textContent='6' />
          <Button value='-' action={printDisplay} textContent='-' dark />
          <Button value='1' action={printDisplay} textContent='1' />
          <Button value='2' action={printDisplay} textContent='2' />
          <Button value='3' action={printDisplay} textContent='3' />
          <Button value='+' action={printDisplay} textContent='+' dark />
          <Button value='0' action={printDisplay} textContent='0' />
          <Button value='.' action={printDisplay} textContent='.' />
          <Button value='=' action={showResult} textContent='=' dark double />
        </div>
      </div>
    </>
  )
}

export default App
