"use client";

import React from "react";
import Button from "./components/Common/Button";
import { routes } from "@/app/Utils/routes";
import AnimatedText from "./components/Common/AnimatedText";
import AnimatedBlock from "./components/Common/AnimatedBlock";

const NotFound = () => {
  return (
    <div className="container not-found">
      <AnimatedText animateOnScroll={false} delay={1.45} byChar>
        <h1>404</h1>
        <h5>Page Not Found</h5>
      </AnimatedText>
      <AnimatedBlock delay={1.65} animateOnScroll={false}>
        <Button text="Back to Home" route={routes.HOME} />
      </AnimatedBlock>
    </div>
  );
};

export default NotFound;
