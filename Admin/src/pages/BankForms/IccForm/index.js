import React from "react"
import PropertyForm from "./PropertyForm"
import BoundariesForm from "./BoundariesForm"
import AmenitiesForm from "./AmenitiesForm"
import CautionAreaForm from "./CautionAreaForm"
import ValuationForm from "./ValuationForm"
import ConstructionProgressForm from "./ConstructionProgressForm"
import DistanceRangeForm from "./DistanceRangeForm"
import SitePhotographsForm from "./SitePhotographsForm;"
import RemarksForm from "./RemarksForm"

const index = () => {
  return (
    <div class="mb-3">
      <PropertyForm />
      <BoundariesForm />
      <AmenitiesForm />
      <CautionAreaForm />
      <ValuationForm />
      <ConstructionProgressForm />
      <DistanceRangeForm />
      <SitePhotographsForm />
      <RemarksForm />
    </div>
  )
}

export default index
