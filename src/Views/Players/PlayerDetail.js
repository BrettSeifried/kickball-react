import { useEffect, useState } from 'react';
// import Player from '../../components/PLayerFunction/Player';
import { fetchplayers, getPlayerById } from '../../services/playerRoute';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function PlayersDetail() {
  // const { id } = useParams();
  //   const [playerData, setPlayerData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getPlayerById();
  //       setPlayerData(data);
  //       console.log(data);
  //     };
  //     fetchData();
  //   }, []);

  //   return (
  // <div>
  //   <ul>
  //     {playerData.map((team) => (
  //       <li key={team.id}>
  //         <Player teamData={team} />
  //       </li>
  //     ))}
  //   </ul>
  // </div>
  //   );
  // }
  // useEffect(() => {
  //   getTeamById(id).then(({ data }) => setTeamData(data));
  // }, [id]);

  //   return (
  //     <>
  //       <ul className="Team-Detail">
  //         {teamData.map((team) => (
  //           <Team key={team.id} team={team} />
  //         ))}
  //       </ul>
  //       ;
  //     </>
  //   );
  // }

  return (
    <div>
      <p>test</p>
    </div>
  );
}
