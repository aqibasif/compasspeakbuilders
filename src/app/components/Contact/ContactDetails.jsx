import React from "react";
import AnimatedText from "../Common/AnimatedText";
import InfiniteScrollText from "../Common/InfiniteScrollText";

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
            <h5>970.413.4265</h5>

            <br />

            <p>Email Us</p>
            <h5>info@compasspeakbuilders.com</h5>

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
