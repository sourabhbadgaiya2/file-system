import React from 'react'
import LocationForm from './LocationFrom'
import PropertyDetailsFrom from './PropertyDetailsForm'
import Specifications from './Specifications'
import StageConstruction from './StageConstruction'
import DocumentUpload from './DocumentUpload'
import RemarksForm from './RemarksFrom'

const Index = () => {
  return (
    <div>
   <LocationForm />
   <PropertyDetailsFrom/>
   <Specifications/>
   <StageConstruction/>
   <DocumentUpload/>
   <RemarksForm/>

    </div>
  )
}

export default Index