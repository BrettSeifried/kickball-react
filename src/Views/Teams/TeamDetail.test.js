import { render, screen } from '@testing-library/react';
// import Team from '../../componentsw/TeamFunction/Team';
import Team from './TeamsDetail';
import { MemoryRouter } from 'react-router-dom';

test('renders Team Players', () => {
  const container = render(
    <MemoryRouter>
      <Team
        team={{
          city: 'Portland',
          state: 'OR',
          id: '1',
          name: 'Bridge City Sneakers',
          players: [{ name: 'Hans Olo' }],
        }}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
