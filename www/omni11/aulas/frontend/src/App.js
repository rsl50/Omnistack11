import React, {useState} from 'react';
import Header from './Header';
function App() {
  //estado para armazenar o valor e permitir a atualização na tela
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
export default App;