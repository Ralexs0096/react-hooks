import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';

const filteredCounter = 0;

const FilterList = () => {
  const [counter, setCounter] = useState(5);
  const [filter, setFilter] = useState('');
  const fruits = useMemo(() => {
    return [
      'Apple',
      'Banana',
      'Cherry',
      'Fig',
      'Grape',
      'Kiwi',
      'Lemon',
      'Mango',
      'Orange'
    ];
  }, []);

  const filteredFruits = useMemo(() => {
    return fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(filter.toLowerCase());
    });
  }, [filter, fruits]);

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Fruit Filter {counter}
          </CardTitle>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setCounter((prev) => prev + 1)}
              className="w-10"
            >
              +1
            </Button>
            <Button
              variant="outline"
              onClick={() => setCounter((prev) => prev - 1)}
              className="w-10"
            >
              -1
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Search for a fruit..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full"
          />
        </CardContent>
      </Card>

      <div className="mt-4">
        <p className="text-gray-600">
          Filter function called: <strong>{filteredCounter}</strong> times
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Filtered Fruits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {filteredFruits.length > 0 ? (
              filteredFruits.map((fruit, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-100 rounded-md text-gray-800"
                >
                  {fruit}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No fruits found.</p>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterList;