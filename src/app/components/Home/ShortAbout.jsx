import React from "react";
import AnimatedText from "../Common/AnimatedText";

const ShortAbout = () => {
  return (
    <div className='short-about'>
      <AnimatedText>
        <h2>
          Northern Colorado
          <br />
          Custom Home Builder
        </h2>
      </AnimatedText>
      <AnimatedText>
        <h5>
          Compass Peak Builders is a custom home builder specializing in custom
          homes, remodels, and home care in Northern Colorado. We combine
          expertise, craft, and integrity to provide an exceptional product with
          peace of mind along the way.
        </h5>
      </AnimatedText>
    </div>
  );
};

export default ShortAbout;
