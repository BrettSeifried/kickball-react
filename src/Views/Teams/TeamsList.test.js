import { render, screen } from '@testing-library/react';
import TeamsList from './TeamsList';

test('renders TeamList', () => {
  const container = render(<TeamsList />);
  expect(container).toMatchSnapshot();
});
