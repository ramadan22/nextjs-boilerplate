import { useState, ReactNode } from 'react';

type ZoomProps = {
  children: ReactNode;
}

const Zoom = ({ children }: ZoomProps) => {
  const [scale, setScale] = useState<number>(1);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  const handleReset = () => {
    setScale(1);
  };

  return (
    <div className="absolute inset-0 border flex flex-col">
      <div className="-mt-6 flex gap-x-1">
        <button className="border border-b-0 rounded-t-sm p-1 text-xs" type="button" onClick={handleZoomIn}>Zoom In</button>
        <button className="border border-b-0 rounded-t-sm p-1 text-xs" type="button" onClick={handleZoomOut}>Zoom Out</button>
        <button className="border border-b-0 rounded-t-sm p-1 text-xs" type="button" onClick={handleReset}>reset</button>
      </div>
      <div className="flex-1 flex justify-center items-center" style={{ zoom: scale }}>
        {children}
      </div>
    </div>
  );
};

export default Zoom;
