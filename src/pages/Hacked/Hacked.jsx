import React from "react";
import Countdown from "react-countdown";
const Hacked = () => {
  return (
    <div className="hacked">
      <h1>You have Been Hacked</h1>
      <p>
        Send 100 ETH to this address: 0x822ae969816C2b29de852498e8d53F9c9EaD3af0
        in 24hrs Otherwise I will publish all your picture and then destroy all
        your file in this computer
      </p>
      <Countdown date={Date.now() + 86400000} />
    </div>
  );
};

export default Hacked;
