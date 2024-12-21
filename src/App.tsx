import { useState } from 'react';
import MousePosition from './components/MousePosition';
import { Button } from './components/ui/button';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setIsOpen(false)}>unmount</Button>
      {isOpen && <MousePosition />}
    </>
  );
}

export default App;
