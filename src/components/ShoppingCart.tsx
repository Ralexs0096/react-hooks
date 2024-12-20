import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ShoppingCart = () => {
  return (
    <Card className="max-w-md mx-auto p-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Shopping Cart</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw8fced24c/images/funko/upload/72093_DBGT_Vegeta_POP_GLAM-WEB.png?sw=800&sh=800"
            alt="Vegeta Funko"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">Vegeta Funko</h2>
            <p className="text-gray-600">$14.99</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => undefined} className="w-10">
            -
          </Button>

          <Input
            type="number"
            value={0}
            onChange={() => undefined}
            className="w-16 text-center"
          />

          <Button variant="outline" onClick={() => undefined} className="w-10">
            +
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Total:</p>
          <p className="text-lg font-bold">$0</p>
        </div>
        <div className="flex justify-between space-x-4">
          <Button className="flex-grow">Checkout</Button>
          <Button variant="outline" className="flex-grow">
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShoppingCart;
