import { useState } from 'react';
import ShoppingCartDrawer from './components/ShoppingCartDrawer';
import { Button } from './components/ui/button';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Vegeta Funko</Button>

      {isOpen && <ShoppingCartDrawer onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default App;
