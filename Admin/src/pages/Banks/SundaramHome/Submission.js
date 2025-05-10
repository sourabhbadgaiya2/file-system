import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Button } from "react-bootstrap"

const Submission = () => {
  return (
    <Container className="py-4">
      <Button variant="info" className="mb-3 w-100 text-white">
        Click Here for One Page View
      </Button>
      <div className="border p-3 bg-light" style={{ whiteSpace: "pre-line" }}>
        <strong>Remarks and Declaration *</strong>
        <div className="mt-2">
          1. GIVEN XEROX COPY OF SALE DEED IT IS FAVOUR OF MR. ROOPAM SEWANI
          S/O. MR. MOTILAL SEWANI. 2. DURING PROPERTY VISIT MR. GAGAN KUMAR J
          MET AT THE PROPERTY WHO IS CUSTOMER WIFE CONTACT NO. 7566888270. IT
          WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR
          VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL. 3. RATE HAS BEEN
          CONFIRM FORM MARKET ENQUIRY. 4. PROPERTY IS SITUATED AT SURROUNDING
          AREA OF LOCALITY IS UNDER DEV. RESI-CUM AGRICULTURE ZONING SURROUNDING
          AREA DEVELOPMENT IS 30%. 5. AT SITE PROPERTY IS G+3 UNDER CONST.
          RESIDENTIAL HOUSE WHICH IS WORK DONE UP TO SLAB, BRICK & INTERIOR
          PLASTER WORK COMPLETE AND FLOORING ELECTRIFICATION AND OUTSIDE PLASTER
          WORK IS W.I.P. 6. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF
          GIVEN SALE DEED AND LOCAL ENQUIRE. 7. LAYOUT PLAN, BUILDING
          PERMISSION, MAP ESTIMATE RECEIVED, WHICH IS APPROVED BY BMC.
        </div>
      </div>
    </Container>
  )
}

export default Submission
