// import { useEffect, useState } from 'react';
// import Player from '../../components/TeamFunction/Team';
// import { fetchplayers, getPlayerById } from '../../services/teamRoute';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// export default function PlayersDetail() {
//   // const { id } = useParams();
//   const [teamData, setTeamData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getTeamById();
//       setTeamData(data);
//       console.log(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <ul>
//         {teamData.map((team) => (
//           <li key={team.id}>
//             <Team teamData={team} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// // useEffect(() => {
// //   getTeamById(id).then(({ data }) => setTeamData(data));
// // }, [id]);

// //   return (
// //     <>
// //       <ul className="Team-Detail">
// //         {teamData.map((team) => (
// //           <Team key={team.id} team={team} />
// //         ))}
// //       </ul>
// //       ;
// //     </>
// //   );
// // }
