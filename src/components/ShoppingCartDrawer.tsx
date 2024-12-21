import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const ShoppingCartDrawer = ({ onClose }: { onClose: () => void }) => {
  const [counter, setCounter] = useState(0);

  // Side-Effects
  useEffect(() => {
    console.log('Mounted');
  }, []);

  return (
    <Drawer open>
      <DrawerContent className="flex flex-col items-center">
        <DrawerHeader className="flex flex-col items-center space-y-4 ">
          <DrawerTitle className="text-center text-xl font-semibold">
            Vegeta Funko {counter}
          </DrawerTitle>
          <img
            src="https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw8fced24c/images/funko/upload/72093_DBGT_Vegeta_POP_GLAM-WEB.png?sw=800&sh=800"
            alt="Placeholder"
            className="rounded-lg shadow-lg w-48 h-48 object-cover"
          />
          <DrawerDescription className="text-center text-gray-600">
            This item is amazing! Please buy it!
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="flex w-full space-x-2 mt-4">
          <Button className="flex-grow" onClick={() => setCounter(counter + 1)}>
            Add to cart
          </Button>
          <DrawerClose>
            <Button onClick={onClose} variant="outline" className="flex-grow">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCartDrawer;
