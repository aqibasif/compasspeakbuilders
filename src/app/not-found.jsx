"use client";

import React from "react";
import Button from "./components/Common/Button";
import { routes } from "@/app/Utils/routes";
import AnimatedText from "./components/Common/AnimatedText";
import AnimatedBlock from "./components/Common/AnimatedBlock";
import PageLayout from "./components/PageLayout/PageLayout";

const NotFound = () => {
  return (
    <PageLayout>
      <div className='not-found'>
        <AnimatedText animateOnScroll={false} delay={0.45} byChar>
          <h1>404</h1>
        </AnimatedText>
        <AnimatedText animateOnScroll={false} delay={0.55}>
          <h6>Page Not Found</h6>
        </AnimatedText>
        <AnimatedBlock delay={0.65} animateOnScroll={false}>
          <Button
            variant={"outlined"}
            text='Back to Home'
            route={routes.HOME}
          />
        </AnimatedBlock>
      </div>
    </PageLayout>
  );
};

export default NotFound;
