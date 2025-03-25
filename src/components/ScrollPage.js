
import React, { useState } from "react";

export default function ScrollPage() {

      const [isSpinning, setIsSpinning] = useState(false);
    
      const handleSpin = () => {
        setIsSpinning(true);
        // Stop the spinning animation after 1 second (adjust to match animation duration)
        setTimeout(() => setIsSpinning(false), 1000);
      };
    
      return (
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <img
              src="https://via.placeholder.com/200"
              alt="Spinning"
              className={`rounded-lg transition-transform ${
                isSpinning ? "animate-spin" : ""
              }`}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <button
            onClick={handleSpin}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Spin Image
          </button>
        </div>
      );
    }
    