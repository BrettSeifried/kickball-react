import { useEffect, useState } from 'react';
import Player from '../../components/PlayerFunction/Player';
import { fetchplayers, getPlayerById } from '../../services/playerRoute';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function PlayersDetail() {
  const { id } = useParams();
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayerById();
      setPlayerData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    getPlayerById(id).then(({ data }) => setPlayerData(data));
  }, [id]);

  return (
    <div>
      <ul>
        <li key={playerData.id}>
          <Player player={playerData} />
        </li>
      </ul>
    </div>
  );
}
