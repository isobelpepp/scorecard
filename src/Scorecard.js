import React from 'react';

export const Scorecard = () => {

  return (
    <div class="w-50 container line-in-middle">
      <div class="row we-they">
        <div class="col-sm content-left">
          We
        </div>
        <div class="col-sm content-right">
          They
        </div>
      </div>
      <div class="row above">
        <div class="col-sm content-left">
          Above the line
        </div>
        <div class="col-sm content-right">
          Above the line
        </div>
      </div>
      <div class="row below">
        <div class="col-sm content-left">
          Below the line
        </div>
        <div class="col-sm content-right">
          Below the line
        </div>
      </div>
    </div>
  )
}


export default Scorecard;
