import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
import App from './App';

jest.mock('./api/fetchMissions');

// console.log(mockFetchMissions);

it('App fetches missions and render data', async () => {
  const mockData = { data: [{ mission_id: 1, mission_name: 'mission one' }] };

  mockFetchMissions.mockResolvedValueOnce(mockData);

  const { getByTestId, getAllByTestId, getByText } = render(<App />);

  const getDataButton = getByTestId('fetch-btn');

  fireEvent.click(getDataButton);
  getByText(/we are fetching data/i);

  await waitFor(() => {
    expect(getAllByTestId('a_mission')).toHaveLength(1);
  });
});
