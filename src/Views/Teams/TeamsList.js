import { useEffect, useState } from 'react';
import Team from '../../components/TeamFunction/Team';
import { getTeams } from '../../services/teamRoute';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../services/teamRoute';

export default function TeamsList() {
  const [teams, setTeams] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      // console.log(data);
      setTeams(data);
    };
    fetchData();
  }, []);

  // if (loading) return <h1>Get your popcorn ready...</h1>;

  return (
    <ul className="team-list">
      {teams.map((team) => (
        <li key="id">
          <Link key={team.id} to={`/teams/${team.id}`}>
            {team.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
