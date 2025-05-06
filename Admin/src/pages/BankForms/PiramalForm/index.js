import React from 'react'
import IndividualValuation from './IndividualValuation'
import BasicDetail from './BasicDetail'
import Boundaries from './Boundaries'
import SurroundingLocality from './SurroundingLocality'
import SanctionPlan from './SanctionPlan'
import PropertyDetails from './PropertyDetails'
import NdmaParameters from './NdmdParameters'
import BuildingDetails from './BuildingDetails'
import AreaDetails from './AreaDetails'
import Valuation from './Valuation'
import StageConstruction from './StageConstruction'
import OtherValue from './OtherValue'

const index = () => {
  return (
    <div>
        <IndividualValuation/>  
        <BasicDetail/>
        <Boundaries/>
        <SurroundingLocality/>
        <SanctionPlan/>
        <PropertyDetails/>
        <NdmaParameters/>
        <BuildingDetails/>
        <AreaDetails/>
        <Valuation/>
        <StageConstruction />
        <OtherValue/>

    </div>
  )
}

export default index