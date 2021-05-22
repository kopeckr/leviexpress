import React, { useState } from 'react';
import JourneyPicker from '../JourneyPicker/index';

const Home = () => {
  const [journey, setJourney] = useState(null);
  return (
    <>
      <JourneyPicker onJourneyChange={(data) => setJourney(data)} />
      {journey !== null ? (
        <div>Nalezeno spojení s id{journey.journeyId}</div>
      ) : undefined}
    </>
  );
};

export default Home;

{
  /* <JourneyPicker onJourneyChange={() => console.log('ahoj')} /> */
}
