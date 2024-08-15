import React from 'react';
import './Load.css';
import logo from '/EcellLogo3D.png';
import { dotPulse } from 'ldrs'

dotPulse.register()

const Load = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(intervalId); // Stop the interval
                    return 100; // Ensure it stays at 100
                }
                return prev + 1; // Increment the count
            });
        }, 50); // Adjust the speed as needed (50ms for faster loading)

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
      <div>
        <div className="loading">
            <div className="load">
                <img src={logo} alt="Logo" />
            </div>
<l-dot-pulse
  size="43"
  speed="1.3" 
  color="white" 
></l-dot-pulse>
        </div>
        <div className="counter">
                {count}%
        </div>
        </div>
    );
};

export default Load;
