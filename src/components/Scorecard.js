import React from 'react';

export const Scorecard = () => {

  return (
    <div className="w-50 container line-in-middle">
      <div className="row we-they">
        <div className="col-sm content-left" data-testid="we-column">
          We
        </div>
        <div className="col-sm content-right" data-testid="they-column">
          They
        </div>
      </div>
      <div className="row above">
        <div className="col-sm content-left">
          Above the line
        </div>
        <div className="col-sm content-right">
          Above the line
        </div>
      </div>
      <div className="row below">
        <div className="col-sm content-left">
          Below the line
        </div>
        <div className="col-sm content-right">
          Below the line
        </div>
      </div>
    </div>
  )
}


export default Scorecard;
