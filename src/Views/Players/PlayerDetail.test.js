import { render } from '@testing-library/react';
import Player from './PlayerDetail';
import { MemoryRouter } from 'react-router-dom';

test('renders Team Players', () => {
  const container = render(
    <MemoryRouter>
      <Player
        team={{
          name: 'Hans Olo',
          position: 'Catcher',
        }}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
