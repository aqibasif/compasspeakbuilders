import Banner from "../../components/Common/Banner2";
import TextAnimationWrapper from "../../components/Common/TextAnimationWrapper";
import { ContactBanner } from "@/app/Utils/images";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="contact-us">
      <Banner
        backgroundImage={ContactBanner}
        heading="Contact Us"
        centerHeading
      />

      <div className="contact-us-wrapper">
        <TextAnimationWrapper>
          <p className="poppins-font transparent-text">get in touch</p>
        </TextAnimationWrapper>
        <div className="info">
          <TextAnimationWrapper>
            <h4 className="poppins-font">Contact Details</h4>
            <p className="poppins-font">
              It’s never too early or too late to reach out – we’d love to see
              how we can help!
            </p>
          </TextAnimationWrapper>

          <div className="detail-box">
            <div className="social-detail">
              <div className="icon">
                <FaPhone />
              </div>
              <div className="details">
                <h3 className="poppins-font">Call Us</h3>
                <p className="poppins-font">970.413.4265</p>
              </div>
            </div>
            <div className="social-detail">
              <div className="icon">
                <IoMail />
              </div>
              <div className="details">
                <h3 className="poppins-font">Email Us</h3>
                <p className="poppins-font">info@compasspeakbuilders.com</p>
              </div>
            </div>
            <div className="social-detail">
              <div className="icon">
                <IoLocationSharp />
              </div>
              <div className="details">
                <h3 className="poppins-font">Mailing Address</h3>
                <p className="poppins-font">PO Box 63, Timnath, CO 80547</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
