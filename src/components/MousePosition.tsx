import useMousePosition from '@/hooks/useMousePosition';

const MousePosition = () => {
  const { x, y } = useMousePosition();

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-xl text-gray-700">
        Mouse Position: X: {x}, Y: {y}
      </p>
    </div>
  );
};

export default MousePosition;
