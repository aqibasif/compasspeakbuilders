import React from "react";
import AnimatedText from "../Common/AnimatedText";
import InfiniteScrollText from "../Common/InfiniteScrollText";
import CustomLink from "../Common/CustomLink";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import AnimatedBlock from "../Common/AnimatedBlock";

const ContactDetails = () => {
  return (
    <>
      <div className='contact-details-container'>
        <AnimatedText>
          <h1 className='hidden-text'>GET IN TOUCH</h1>
        </AnimatedText>

        <AnimatedText>
          <h4 className='contact-heading'>Contact Details</h4>
        </AnimatedText>
        <AnimatedText>
          <p>
            It's never too early or too late to reach out - we'd love to see how
            we can help!
          </p>
        </AnimatedText>

        <div className='contact-details'>
          <div className='contact-block'>
            <AnimatedBlock>
              <div className='contact-icon'>
                <IoCallOutline />
              </div>
            </AnimatedBlock>
            <div className='contact-text-block'>
              <AnimatedText>
                {/* <p>Call Us</p> */}
                <h6>
                  <CustomLink href='tel:9704134265'>970.413.4265</CustomLink>
                </h6>
              </AnimatedText>
            </div>
          </div>

          <div className='contact-block'>
            <AnimatedBlock>
              <div className='contact-icon'>
                <IoMailOutline />
              </div>
            </AnimatedBlock>
            <div className='contact-text-block'>
              <AnimatedText>
                {/* <p>Email Us</p> */}
                <h6>
                  <CustomLink href='mailto:info@compasspeakbuilders.com?subject=Project%20from%20CompassPeakBuilders'>
                    info@compasspeakbuilders.com
                  </CustomLink>
                </h6>
              </AnimatedText>
            </div>
          </div>

          <div className='contact-block'>
            <AnimatedBlock>
              <div className='contact-icon'>
                <IoLocationOutline />
              </div>
            </AnimatedBlock>
            <div className='contact-text-block'>
              <AnimatedText>
                {/* <p>Mailing Address</p> */}
                <h6>PO Box 63, Timnath, CO 80547</h6>
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
      {/* <InfiniteScrollText text='Contact Us - Contact Us - Contact Us - Contact Us - Contact Us - Contact Us - ' /> */}
    </>
  );
};

export default ContactDetails;
