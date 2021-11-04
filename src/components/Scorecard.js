import React from 'react';
import PropTypes from 'prop-types';

export const Scorecard = (props) => {

  const weScore = () => {
    let above = props.weAboveScores.reduce((a, b) => a + b, 0)
    let below = props.weBelowScores.reduce((a, b) => a + b, 0)
    return above + below
  }

  const theyScore = () => {
    let above = props.theyAboveScores.reduce((a, b) => a + b, 0)
    let below = props.theyBelowScores.reduce((a, b) => a + b, 0)
    return above + below
  }

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
      <div className="row scores-games">
        <div className="col-sm content-left" data-testid="we-scores">
          <p>Games: {props.weGames}</p>
          <p data-testid='we-below-score'>Score: {weScore()} </p>
        </div>
        <div className="col-sm content-right" data-testid="they-scores">
          <p>Games: {props.theyGames}</p>
          <p data-testid='they-below-score'> Score: {theyScore()}</p>
        </div>
      </div>
      <div className="row above">
        <div className="col-sm content-left" data-testid="we-above-line">
        { props.weAboveScores.map((score, index) =>
            <li key={index}>
              {score}
            </li> )
          }
        </div>
        <div className="col-sm content-right" data-testid="they-above-line">
        { props.theyAboveScores.map((score, index) =>
            <li key={index}>
              {score}
            </li> )
          }
        </div>
      </div>
      <div className="row below">
        <div className="col-sm content-left" data-testid="we-below-line">
    
        { props.weBelowScores.map((score, index) =>
            <li key={index} >
              {score}
            </li> )
          }
        </div>
        <div className="col-sm content-right" data-testid="they-below-line">
        { props.theyBelowScores.map((score, index) =>
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
  weBelowScores: PropTypes.array,
  theyBelowScores: PropTypes.array,
  weAboveScores: PropTypes.array,
  theyAboveScores: PropTypes.array,
  weGames: PropTypes.number,
  theyGames: PropTypes.number
};

export default Scorecard;
