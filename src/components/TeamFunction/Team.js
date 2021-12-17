import React from 'react';
import { Link } from 'react-router-dom';

// const playerDetails = ({ team, players: { name, position } }) => {
//   return `${name}: ${position}`;
// };

export default function Team({ team }) {
  return (
    <section className="team-detail">
      <div>
        <h2> {team.name} </h2>
      </div>
      <div>
        <p>City: {team.city}</p>
        <p>State: {team.state}</p>
      </div>
      <div>
        {team.players.map(({ name, position, id }) => (
          <Link key={name} to={`/players/${id}`}>
            <p key="name">
              {name}: {position}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
