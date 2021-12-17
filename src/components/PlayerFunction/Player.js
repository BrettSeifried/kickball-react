import React from 'react';

export default function Player({ player }) {
  return (
    <section className="player-detail">
      <div>
        <h2> {player.name} </h2>
      </div>
      <div>
        <p>Position: {player.position}</p>
      </div>
    </section>
  );
}
