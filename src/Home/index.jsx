import React, { useState } from 'react';
import JourneyPicker from '../JourneyPicker/index';
import JourneyDetail from '../JourneyDetail/index';

const Home = () => {
  const [journey, setJourney] = useState(null);
  return (
    <>
      <JourneyPicker onJourneyChange={(data) => setJourney(data)} />
      {journey !== null ? <JourneyDetail journey={journey} /> : undefined}
    </>
  );
};

export default Home;

{
  // <div>Nalezeno spojení s id{journey.journeyId}</div>
  /* <JourneyPicker onJourneyChange={() => console.log('ahoj')} /> */
}
