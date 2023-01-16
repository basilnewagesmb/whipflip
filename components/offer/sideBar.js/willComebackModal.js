import React from "react";

import { Modal } from "react-bootstrap";
import Image from 'next/image'

function WillComebackContent() {
  return (
    <Modal.Body className="nl_body p-0">
      <div className="nl_text">
        <p>
          We hope you come back soon! We are always here! Simply pick up where
          you left off with any of the options below:
        </p>
      </div>
      <div className="nl_list">
        <div className="nl_item">
          <div className="nl_item_left">
            <div className="nl_img">
              <Image
                src="/images/nl1.svg"
                alt="Revisit the homepage"
                title="Revisit the homepage"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="nl_item_right">
            <p>
              Revisit the homepage of whipflip.com. We’ll keep it there for 5
              days!
            </p>
          </div>
        </div>
        <div className="nl_item">
          <div className="nl_item_left">
            <div className="nl_img">
              <Image
                src="/images/nl2.svg"
                alt="Retrieve Offer"
                title="Retrieve Offer"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="nl_item_right">
            <p>
              Select the “Retrieve Offer” Option in the menu of WhipFlip.com if
              it’s been over 5 days.
            </p>
          </div>
        </div>
        <div className="nl_item">
          <div className="nl_item_left">
            <div className="nl_img">
              <Image
                src="/images/nl3.svg"
                alt="Retrieve Offer"
                title="Retrieve Offer"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="nl_item_right">
            <p>Access the offer link we emailed you.</p>
          </div>
        </div>
      </div>
    </Modal.Body>
  );
}

export default WillComebackContent;
