import React from 'react';
import PropTypes from 'prop-types';

export const Scorecard = (props) => {

  // console.log(props.theyScores)

  return (
    <div>
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
        <div className="col-sm content-left" data-testid="we-above-line">
        </div>
        <div className="col-sm content-right" data-testid="they-above-line">
        </div>
      </div>
      <div className="row below">
        <div className="col-sm content-left" data-testid="we-below-line">
        { props.weScores.map((score, index) =>
            <li key={index} >
              {score}
            </li> )
          }
        </div>
        <div className="col-sm content-right" data-testid="they-below-line">
        { props.theyScores.map((score, index) =>
            <li key={index}>
              {score}
            </li> )
          }
        </div>
      </div>
    </div>
    </div>
  )
}

Scorecard.propTypes = {
  props: PropTypes.func,
  weScores: PropTypes.array,
  theyScores: PropTypes.array,
};

export default Scorecard;
