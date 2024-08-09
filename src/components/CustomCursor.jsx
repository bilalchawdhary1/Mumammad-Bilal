import { useEffect } from "react";

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('customCursor');
        const trail = Array.from(document.getElementsByClassName('trail'));
    
        const handleMouseMove = (e) => {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
    
          trail.forEach((dot, index) => {
            setTimeout(() => {
              dot.style.left = e.clientX + 'px';
              dot.style.top = e.clientY + 'px';
            }, index * 50); // Delay each dot's movement to create the trailing effect
          });
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
    
      return (
      <>
      <div className="custom-cursor" id="customCursor"></div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="trail"></div>
      ))}
    </>
      )
}

export default CustomCursor
