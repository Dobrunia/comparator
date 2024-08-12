import { useState } from 'react';
import { CompareContainer } from './components/CompareContainer/CompareContainer';

function App() {
  const [count, setCount] = useState(0);

  return <CompareContainer />;
}

export default App;
