import React from 'react';

const MissionsList = ({ missions, error }) => {
  return (
    <section className='missions-list'>
      {error ? (
        <div className='error'>{error}</div>
      ) : (
        <div>
          {missions.map((mission) => (
            <div className='mission' key={mission.mission_id}>
              {mission.mission_name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MissionsList;
