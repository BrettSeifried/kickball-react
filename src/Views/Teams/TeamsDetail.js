import { useEffect, useState } from 'react';
import Team from '../../components/TeamFunction/Team';
import { fetchTeams, getTeamById } from '../../services/teamRoute';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function TeamsDetail() {
  const { id } = useParams();
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // const data = await getTeamById();
      const data = await getTeamById(id);
      setTeamData(data.data);
      setLoading(false);
      console.log(data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    getTeamById(id).then(({ data }) => setTeamData(data));
  }, [id]);

  if (loading) return <h1> Get Your popcorn ready</h1>;

  return (
    <div>
      <ul>
        <li key={teamData.id}>
          <Team team={teamData} />
        </li>
      </ul>
    </div>
  );
}

//   return (
//     <>
//       {/* <ul className="Team-Detail">
//         {teamData.map((team) => (
//           <p key="id">
//             <Team teamData={team} />
//           </p>
//         ))}
//       </ul>
//       ; */}
//     </>
//   );
// }
