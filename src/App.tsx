import React, { useState } from 'react';
import './App.css'
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {

  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
    { message: 'message4' },
  ])

  let [title, setTitle] = useState('')
  console.log(title);
  

  const clickButtonApp = (titleApp: string) => {

    let newMessage = { message: titleApp };
    setMessage([...message, newMessage])

  }

  const callBackButtonHandler=()=> {
    clickButtonApp(title)
    setTitle('')
  }

  return (
    <div className='app'>

      {/* <FullInput onClickButton={clickButtonApp} /> */}
      
      <Input 
        setTitle={setTitle}
        title={title}
      />
      <Button
        name='буттон'
        callBack={callBackButtonHandler}
      />

      {message.map((el, index) => {
        return (
          <div key={index}> {el.message} </div>
        )
      })}

    </div>
  );
}

export default App;
