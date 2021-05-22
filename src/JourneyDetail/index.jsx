import React from 'react';
import './style.css';
import BusStops from '../BusStop/index';

const JourneyDetail = ({ journey }) => {
  return (
    <>
      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          {journey.stops.map((stop) => (
            <BusStops
              key={stop.time}
              name={stop.name}
              station={stop.station}
              time={stop.time}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default JourneyDetail;
