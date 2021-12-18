import { render } from '@testing-library/react';
import PlayerList from '../../Views/Players/PlayerList';

test('renders PlayerList on Home Page', () => {
  const container = render(<PlayerList />);
  expect(container).toMatchSnapshot();
});
