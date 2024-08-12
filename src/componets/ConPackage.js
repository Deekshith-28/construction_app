import React, { useState, useEffect } from 'react';

import Package from './Package';
import './ConPackage.css';

function ConPackage() {

  return (
    <div className="App">
      <div className="container py-5">
        <h2 className="text-center">Home Construction <span className="text-warning">Packages</span></h2>
        <div className="row mt-4">
          <Package type="Silver" features={["Floor plans + Structural", "Standard Elevation", "Vitrified Tiles Flooring", "Modern Bathroom and Kitchen", "Main door"]} image="https://www.buildhood.com/images/silver.jpeg" />
          <Package type="Gold" features={["Floor plans + Structural", "Classic Elevation", "Premium Vitrified Tiles Flooring", "Modern Bathroom and Kitchen", "Teak main door"]} image="https://www.buildhood.com/images/gold.jpg"  />
          <Package type="Diamond" features={["Floor plans + Structural", "Elegant elevation", "Granite Flooring", "Premium Bathroom and Kitchen", "Premium Teak"]} image="https://www.buildhood.com/images/diamond.jpg" />
          <Package type="Platinum" features={["Floor plans + Structural, Electrical and Plumbing", "Contemporary Elevation", "Premium Granite Flooring", "Premium Bathroom and Kitchen", "Burma Teak"]} image="https://www.buildhood.com/images/platinum.jpeg" />
        </div>
    
      </div>
      
    </div>
  );
}

export default ConPackage;
