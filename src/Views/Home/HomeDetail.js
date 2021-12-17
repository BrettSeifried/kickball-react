import { Link } from 'react-router-dom';

export default function HomeDetail() {
  return (
    <div className="home">
      <h2> Welcome to the PNW Semi-Amatuer kick ball league!</h2>
      <p>
        Find a team <Link to={'/teams'}>Team</Link> or <Link to={'/players'}>Players</Link>
      </p>
    </div>
  );
}
