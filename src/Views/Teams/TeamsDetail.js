import { useEffect, useState } from 'react';
import Team from '../../components/TeamFunction/Team';
import { fetchTeams, getTeamById } from '../../services/teamRoute';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function TeamsDetail() {
  const { id } = useParams();
  const [teamData, setTeamData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchTeams();
  //     console.log(data);
  //     setTeamData(data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    getTeamById(id).then(({ data }) => setTeamData(data));
  }, [id]);

  return (
    <h1>test</h1>
    // <ul className="player-list">{}</ul>;
  );
}
