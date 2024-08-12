import React from 'react';
import './CompTab.css';

function ComparisonTable() {
  const data = [
    { feature: 'Price', buildhood: 'Best price guarantee\nNo hidden costs', typical: 'Comparatively higher prices\nPrice hike between first quote and final cost' },
    { feature: 'Quality', buildhood: 'Branded material\n320+ Quality checks\nISO Quality standards\nIn-house project management, No sub-contractors\nQuality Finishing', typical: 'Inferior materials used to cut the costs\nNo quality checks\nPoor standards\nOutsourced to Sub-contractors\nPoor finishing' },
    { feature: 'Sub-Contractors', buildhood: 'No Sub-Contractors\nIn-house project management, No third-party involvement.', typical: 'YES\nMostly outsourced to Sub-contractors' },
    { feature: 'Transparency', buildhood: 'Transparent at every level\nPricing, Material specification, Process and Execution', typical: 'Limited to No transparency' },
    { feature: 'Convenience', buildhood: 'One-stop solution\nWe take care from Plan approval to handover the project without any hassles', typical: 'Hassle experience to No support' },
    { feature: 'Design', buildhood: 'Personalized Designs and Architecture', typical: 'Cookie-cutter designs and Architecture' },
    { feature: 'Timelines', buildhood: 'On-Time Project Completion with appropriate Timelines\nRegular updates with Project tracking', typical: 'Delays in project completion and unreliable timelines\nPoor communication on Project updates/delays' },
    { feature: 'Warranty', buildhood: '5 years warranty for the service\nWe provide after sales service', typical: 'No warranty or Warranty for namesake\nNo after sales service' },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">The Buildhood <span className="text-warning">Advantage</span></h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>FEATURE</th>
              <th className="bg-success text-white">BUILDHOOD</th>
              <th>TYPICAL EXPERIENCE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.feature}</td>
                <td>{item.buildhood.split('\n').map((line, i) => (<li key={i} className='dot'>{line}</li>))}</td>
                <td>{item.typical.split('\n').map((line, i) => (<li key={i}>{line}</li>))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComparisonTable;
