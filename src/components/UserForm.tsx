import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const UserForm = () => {
  return (
    <Card className="max-w-lg mx-auto p-6 space-y-6">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-800">
          Preview
        </CardTitle>
        <div className="space-y-2">
          <p className="text-gray-700">
            <strong>First Name:</strong> Alexander
          </p>
          <p className="text-gray-700">
            <strong>Last Name:</strong> Ruiz
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> ralexs.acu@gmail.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> 87654321
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            value={''}
            onChange={() => undefined}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            value={''}
            onChange={() => undefined}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={''}
            onChange={() => undefined}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            type="tel"
            value={''}
            onChange={() => undefined}
          />
        </div>
        <Button className="w-full mt-4">Submit</Button>
      </CardContent>
    </Card>
  );
};

export default UserForm;
