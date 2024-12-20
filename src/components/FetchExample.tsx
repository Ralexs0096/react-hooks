import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Response {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// url: 'https://jsonplaceholder.typicode.com/posts'

const FetchExample = () => {
  const [posts, setPosts] = useState<Response[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => setPosts(data))
    //   .catch((e) => console.log(e));

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-blue-500 border-blue-200"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts?.map((post) => (
        <Card key={post.id} className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{post.body}</p>
            <Button className="w-full">Read More</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FetchExample;
