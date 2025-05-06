import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Remarks = () => {
  return (
    <Container className="my-4">
      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>ELECTRICITY DETAILS</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <p><strong>Connection in the name of</strong><br />-</p>
              <p><strong>Land Rate given for the property in the same locality in Last 3 Months</strong><br />-</p>
            </Col>
            <Col md={6}>
              <p>
                <strong>TECHNICALLY ACCEPTABLE?</strong><br />
                <span className="me-3">YES</span>
                <span>NO</span>
              </p>
              <p>
                <strong>RISK of Demolition</strong><br />
                <span className="me-2">HIGH</span>
                <span className="me-2">MEDIUM</span>
                <span>LOW</span>
              </p>
              <p>
                <strong>MARKETABILITY OF PROPERTY</strong><br />
                <span className="me-2">POOR</span>
                <span className="me-2">AVERAGE</span>
                <span className="me-2">GOOD</span>
                <span>EXCELLENT</span>
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>REMARKS ON PROPERTY</h5>
        </div>
        <Card.Body>
          <ol>
            <li>GIVEN COPY OF SALE DEED IN FAVOUR OF SYLT, HANTA TYAGI W/O NR. DEEPAK TYAGI.</li>
            <li>DURING PROPERTY VISIT DEEPAK TYAGI WAS MET AT THE PROPERTY HE IS CUSTOMER CONTACT NO. 98905938 IT WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATING PURPOSE IN RELATION WITH LOAN PROPOSALS.</li>
            <li>RATE HAS BEEN CONFIRMED FROM MARKET ENOUGH: A. PROPERTY IS STILL ALL AT SURROUNDING AREA OF RESIDENTIAL REALITY BY THE NEW PROPERTY.</li>
            <li>PERFORMANCE OF THE PROPERTY VISIT AND OTHER PRODUCTS OF THE PROPERTY VISIT.</li>
          </ol>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>DECLARATION</h5>
        </div>
        <Card.Body>
          <p>I/We hereby Confirm and declare as that :</p>
          <ol>
            <li>The property was inspected by ANCE, JND on 08.04.2005</li>
            <li>I/We have no direct or indirect interest in the property valued.</li>
            <li>The information furnished above are true and correct to my/our best of knowledge.</li>
          </ol>

          <div className="mt-4">
            <h6>DISCLAIMERS:</h6>
            <p>
              I / we are merely acting in the capacity of a valuer and does not undertake any responsibility for aspects other than valuation of property as mentioned in the report. All assistance is provided on a best effort based only. The valuation report are based on the location of the property, infrastructure available, overall development of the vicinity and prevailing market rates for similar properties and on the facts and confirmation provide obtained by us, We will not provide any professional advice and/or any other party on our behalf as on date of assessment, we represented the extent that complete report with respect to all relevant data. The Report contains an representation or warranties of any kind, we ensure appropriate exercise or due diligence with respect to the property, including approval status, legal and tax diligence, prior to taking of any decision and also Compliance with statutory requirements. In particular, for construction is not our responsibility for any undertakings on the construction activity; I / we do not have any role in construction and relating of the project / Property. I/we not undertake any investments into the time of the property and the valuation is made on the presumption that the property possesses a good and marketable title and is free from encumbrances. The contents of this Report are strictly confidential and sole responsible on us and are intended for the exclusive use of our Client (the Cholamandalam Investment and Finance Company Limited. This document may not be attached in any way, transmitted, copied or distributed, in part or in whole, to any other person or to the media or reproduced in any form, without prior written consent from Cholamandalam Investment and Finance Company Limited). Cholamandalam Investment and Finance Company Limited accepts no responsibility or liability to any third party for whole or any part of the Report. Cholamandalam Investment and Finance Company Limited specifically excludes from any liability with respect to any losses due to any act or omission of the developer or any other third party and any consequences thereof in any total aggregate liability for any reason, whatsoever, shall not be liable for any effect or limited on consequential losses which arise out of its connection with services (Report) provided under this engagement by us. This is to certify that the said report deem/assied by us through online platform of Cholamandalam Investment and Finance Company Limited hence, signature is not required.
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Remarks;