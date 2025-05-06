import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ValuationForm = () => {
  const [formData, setFormData] = useState({
    caution_property: '',
    usage_master_plan: '',
    usage_site: '',
    marketability: '',
    rental_value: '',
    factor_enhancing: '',
    factor_affecting: '',
    building_spec_1: '',
    building_spec_2: '',
    total_units: '',
    construction_type: '',
    structure: '',
    roof: '',
    flooring: [],
    details_of_rooms: '',
    stage_of_construction: '',
    year_of_construction: '',
    total_life: '',
    age_of_building: '',
    residual_age: '',
    natural_protection: [],
    facilities: [],
    extent_of_land: '',
    unit: '',
    land_rate_range: '',
    rate_adopted: '',
    land_value: '',
    guideline_value: '',
    building_area: '',
    building_unit: '',
    building_value: '',
    carpet_area: '',
    amenities_cost: '',
    total_property_value: '',
    realizable_value: '',
    forced_sale_value: '',
    present_value: '',
    property_outlook: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && Array.isArray(formData[name])) {
      setFormData((prev) => {
        const updated = checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value);
        return { ...prev, [name]: updated };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  const renderInput = (label, name, type = 'text') => (
    <Form.Group as={Col} md={4} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={formData[name] || ''}
        onChange={handleChange}
      />
    </Form.Group>
  );

  const renderSelect = (label, name, options) => (
    <Form.Group as={Col} md={4} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Select name={name} value={formData[name]} onChange={handleChange}>
        <option value="">Select</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>{option}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );

  const renderCheckboxGroup = (label, name, options) => (
    <Form.Group as={Col} md={12} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <div>
        {options.map((option) => (
          <Form.Check
            inline
            key={option}
            label={option}
            value={option}
            type="checkbox"
            name={name}
            checked={formData[name]?.includes(option)}
            onChange={handleChange}
          />
        ))}
      </div>
    </Form.Group>
  );

  return (
    <div className="container py-4">
      <h5 className="mb-4">Valuation Details</h5>
      <Form onSubmit={handleSubmit}>
        <Row>
          {renderSelect('Caution Property', 'caution_property', ['YES', 'NO'])}
          {renderSelect('Usage of Property - Master Plan', 'usage_master_plan', ['Residential', 'Commercial', 'Industrial'])}
          {renderSelect('Usage of Property - Site', 'usage_site', ['Residential', 'Commercial', 'Industrial'])}
          {renderSelect('Marketability of the Property', 'marketability', ['EXCELLENT', 'GOOD', 'AVERAGE', 'BELOW AVERAGE'])}
          {renderInput('Approximate Rental value', 'rental_value')}
          {renderInput('Factor Enhancing Market value', 'factor_enhancing')}
          {renderInput('Factor Affecting Market value', 'factor_affecting')}
        </Row>
        <Row>
          {renderInput('Building Spec 1', 'building_spec_1')}
          {renderInput('Building Spec 2', 'building_spec_2')}
        </Row>
        <Row>
          {renderInput('No. of Floors and Total Units', 'total_units')}
          {renderSelect('Construction Type', 'construction_type', ['New Construction', 'Old Construction'])}
          {renderSelect('Structure', 'structure', ['Framed', 'Load Bearing', 'Mixed', 'Steel'])}
          {renderSelect('Roof', 'roof', ['Industry roof', 'Light', 'Madras Terrace', 'RCC', 'Tiled'])}
        </Row>
        <Row>
          {renderCheckboxGroup('Flooring', 'flooring', ['Cement', 'Ceramic Tiles', 'Granite', 'Marble', 'Mosaic', 'Stone', 'Tiles', 'Under Construction', 'Vitrified Tiles'])}
        </Row>
        <Row>
          {renderInput('Details of Rooms', 'details_of_rooms')}
        </Row>
        <Row>
          {renderSelect('Stage of Construction', 'stage_of_construction', ['Under Construction', 'Completed'])}
          {renderInput('Year of Construction', 'year_of_construction')}
          {renderInput('Total Life of Building', 'total_life')}
          {renderInput('Age of Building Detailed', 'age_of_building')}
          {renderInput('Residual Age', 'residual_age')}
        </Row>
        <Row>
          {renderCheckboxGroup('Natural Protection', 'natural_protection', ['Earthquake Protection', 'Fire Fighting System', 'Floods Protection', 'Landslide Protection', 'Tsunami Protection', 'Volcanic Eruption Protection'])}
        </Row>
        <Row>
          {renderCheckboxGroup('Facilities Available', 'facilities', ['CCTV', 'Club House', 'Community Hall', 'Covered Car Park', 'Gym', 'Intercom Facility', 'Kids Play Area', 'Lift', 'No Additional Amenities', 'Power Backup - For Common Areas', 'Power Backup - For Limited Points & Common Area', 'Power Backup - For Entire Building', 'Security', 'Swimming Pool'])}
        </Row>
        <Row>
          {renderInput('Extent of Land', 'extent_of_land')}
          {renderSelect('Unit', 'unit', ['Sq.Ft.', 'Sq.Mt.'])}
          {renderInput('Land - Rate Range', 'land_rate_range')}
          {renderInput('Rate adopted', 'rate_adopted')}
          {renderInput('Land Value', 'land_value')}
          {renderInput('Guideline Value of Land', 'guideline_value')}
          {renderInput('Building Area', 'building_area')}
          {renderSelect('Building Unit', 'building_unit', ['sq.ft', 'sq.mt'])}
          {renderInput('Building Value', 'building_value')}
          {renderInput('Carpet Area in Sq Ft as per site', 'carpet_area')}
          {renderInput('Amenities & Service Cost', 'amenities_cost')}
          {renderInput('Total Property Value', 'total_property_value')}
          {renderInput('Realizable Value', 'realizable_value')}
          {renderInput('Forced Sale Value', 'forced_sale_value')}
          {renderInput('Present Value', 'present_value')}
          {renderSelect('Property Outlook', 'property_outlook', ['POSITIVE', 'NEGATIVE', 'NEUTRAL'])}
        </Row>

        <Button type="submit" variant="primary" className="mt-3">SAVE</Button>
      </Form>
    </div>
  );
};

export default ValuationForm;
