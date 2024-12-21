import { useState, useEffect } from 'react';

const MousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('mounted');
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // cleanup callback
    return () => {
      console.log('unmounted');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-xl text-gray-700">
        Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}
      </p>
    </div>
  );
};

export default MousePosition;
