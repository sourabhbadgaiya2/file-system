import React from 'react'
import Valuation from './Valuation'
import Basic from './Basic'
import Boundaries from './Boundaries'
import Locality from './Locality'
import PlanDetails from './PlanDeatils'
import PropertyDetails from './PropertyDetails'
import NdmaParameters from './NdmaParameters'
import Building from './Building'
import AreaDetails from './AreaDetails'
import Individual from './Individual'
import Value from './Value'
import RemarkDeclaration from './RemarkDeclaration'
import LandDetails from './LandDetails'
import Construction from './Construction'
const index = () => {
  return (
   <>
   <Valuation/>
   <Basic/>
   <Boundaries/>
   <Locality/>
   <PlanDetails/>
   <PropertyDetails/>
   <NdmaParameters />
   <Building/>
   <AreaDetails/>
   <Individual/>
   <Construction/>
   <Value/>
   <RemarkDeclaration/>
   <LandDetails/>
   </>
  )
}

export default index