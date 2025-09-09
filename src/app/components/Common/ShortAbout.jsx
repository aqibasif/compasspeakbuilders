import React from "react";
import TextAnimationWrapper from "./TextAnimationWrapper";
import ScrollReveal from "./ScrollReveal";

const ShortAbout = () => {
  return (
    <div className="short-about">
      <TextAnimationWrapper>
        <h2>Northern Colorado Custom Home Builder</h2>
      </TextAnimationWrapper>

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        Compass Peak Builders is a custom home builder specializing in custom
        homes, remodels, and home care in Northern Colorado. We combine
        expertise, craft, and integrity to provide an exceptional product with
        peace of mind along the way.
      </ScrollReveal>
    </div>
  );
};

export default ShortAbout;
