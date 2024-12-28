import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';

const UserForm = () => {
  const infoRef = useRef({
    name: 'Giuliana',
    lastName: 'Leon',
    email: 'gleon@test.com',
    phone: '87654321'
  });

  const [info, setInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setInfo({
      ...info,
      [name]: value
    });
  };

  const defineDefaultValues = () => {
    setInfo({
      name: infoRef.current.name,
      phone: infoRef.current.phone,
      email: infoRef.current.email,
      lastName: infoRef.current.lastName
    });
  };

  return (
    <Card className="max-w-lg mx-auto p-6 space-y-6">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-800">
          Preview
        </CardTitle>
        <div className="space-y-2">
          <p className="text-gray-700">
            <strong>First Name:</strong> {info.name}
          </p>
          <p className="text-gray-700">
            <strong>Last Name:</strong> {info.lastName}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {info.email}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {info.phone}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your first name"
            value={info.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={info.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            type="tel"
            value={info.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button className="w-full mt-4">Submit</Button>
        <Button className="w-full mt-4" onClick={defineDefaultValues}>
          Set Default values
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserForm;
