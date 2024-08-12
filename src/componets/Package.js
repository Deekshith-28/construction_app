import React from 'react';

const Package = ({ type, features,image }) => (
  <div className="col-md-3 mb-4">
    <div className="card">
      <div className="card-header bg-warning text-white text-center">
        {type}
      </div>
      <img src={image} className="card-img-top"  />
      <div className="card-body">
        <h5 className="card-title">Package Includes</h5>
        <ul className="list-unstyled">
          {features.map((feature, index) => (
            <li key={index} className="d-flex align-items-center mb-2">
              <span className="text-success mr-2">&#10003;</span>{feature}
            </li>
          ))}
        </ul>
        <a href="#" className="btn btn-warning w-100">View More</a>
    
      </div>
    </div> 
  </div>
);

export default Package;
