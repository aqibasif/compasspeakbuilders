import React from "react";
import AnimatedText from "../Common/AnimatedText";
import InfiniteScrollText from "../Common/InfiniteScrollText";
import CustomLink from "../Common/CustomLink";

const ContactDetails = () => {
  return (
    <>
      <div className='contact-details-container'>
        <AnimatedText>
          <h2>Contact Us</h2>
        </AnimatedText>

        <div className='lg-only' />
        <div className='lg-only' />

        <div className='contact-details'>
          <AnimatedText>
            <p>
              It's never too early or too late to reach out - we'd love to see
              how we can help!
            </p>
          </AnimatedText>

          <AnimatedText>
            <p>Call Us</p>
            <h5>
              <CustomLink href='tel:9704134265'>970.413.4265</CustomLink>
            </h5>

            <br />

            <p>Email Us</p>
            <h5>
              <CustomLink href='mailto:info@compasspeakbuilders.com?subject=Project%20from%20CompassPeakBuilders'>
                info@compasspeakbuilders.com
              </CustomLink>
            </h5>

            <br />

            <p>Mailing Address</p>
            <h5>PO Box 63, Timnath, CO 80547</h5>
            {/* TODO: add links here */}
          </AnimatedText>
        </div>
      </div>
      <InfiniteScrollText text='Contact Us - Contact Us - Contact Us - Contact Us - Contact Us - Contact Us - ' />
    </>
  );
};

export default ContactDetails;
