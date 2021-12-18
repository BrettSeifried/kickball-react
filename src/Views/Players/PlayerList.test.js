import { render } from '@testing-library/react';
import PlayerList from './PlayerList';

test('renders PlayerList', () => {
  const container = render(<PlayerList />);
  expect(container).toMatchSnapshot();
});
