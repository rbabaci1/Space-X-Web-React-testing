import React from 'react';

const MissionForm = ({ getData, isFetchingData }) => {
  const handleGetData = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      {isFetchingData ? (
        <div>we are fetching data</div>
      ) : (
        <button onClick={handleGetData} data-testid='fetch-btn'>
          Get Data
        </button>
      )}
    </>
  );
};

export default MissionForm;
