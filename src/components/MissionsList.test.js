import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MissionsList from './MissionsList';

afterEach(cleanup);

it('renders MissionsList', () => {
  render(<MissionsList missions={[]} />);
});

it('renders MissionsList with valid Missions', () => {
  const fakeData = [{ mission_id: 1, mission_name: 'Rock Star' }];

  const { queryAllByTestId, getAllByTestId, rerender } = render(
    <MissionsList missions={[]} />
  );

  expect(queryAllByTestId(/a_mission/i)).toHaveLength(0);

  rerender(<MissionsList missions={fakeData} />);

  expect(getAllByTestId('a_mission')).toHaveLength(1);
});
