import React from "react";
import TextAnimationWrapper from "./TextAnimationWrapper";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <div className="about-us-section">
      <TextAnimationWrapper className="bg-text">
        <p className="poppins-font">About us</p>
      </TextAnimationWrapper>
      <div className="text-reveal-wrapper">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
          containerClassName="about-us-reveal"
        >
          Compass Peak Builders was founded on the belief that the construction
          experience – for clients, builders, and trade partners – deserves to
          be restored. Clients should be able to trust the integrity and
          expertise of the builder. They ought to be treated as real people to
          be diligently served by a trusted advisor rather than vending machines
          to be manipulated and coerced into the fastest possible fee. Clients
          have the right to never have to worry about a builder taking quality
          shortcuts, engaging in financial dishonesty, or not standing behind
          their work. Builders doing things the right way deserve to be able to
          work for clients that appreciate their expertise and trust them as
          professionals. They should make a fair profit and invest in taking
          care of their employees, providing career paths and futures for those
          that dedicate their skills to the cause. Great trade partners earn the
          right to be treated fairly as partners, not commodities to transact
          with. They should have the opportunity to work with builders who work
          hard to make the job more efficient for everyone, giving these
          partners the best opportunity to also make a fair profit and have the
          satisfaction of having their work and expertise be appreciated.
          Together, we should all get to take pleasure in the process of
          trusting collaboration that results in the pride of a job well done,
          the delight of a dream becoming reality, and the satisfaction of a
          journey that betters everyone along the way.
        </ScrollReveal>
      </div>
    </div>
  );
};

export default AboutSection;
