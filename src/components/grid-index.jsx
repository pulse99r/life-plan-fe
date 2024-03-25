import { useRef, useEffect } from 'react';

export default function Canvas(props) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    context.fillStyle = "red";
    context.fillRect(0, 0, props.width, props.height);
    
    const clickHandler = () => {
      context.fillStyle = "red";
      context.fillRect(0, 0, props.width, props.height);
    };
    
    canvas.addEventListener("click", clickHandler);
    
    return () => {
      canvas.removeEventListener("click", clickHandler)
    }
    
  }, []);

  return (
    <div>
      <hr></hr>
      <div>this is the canvas area</div>
      <canvas ref={canvasRef} width={props.width} height={props.height} />;
      <hr></hr>
    </div>
  );
}