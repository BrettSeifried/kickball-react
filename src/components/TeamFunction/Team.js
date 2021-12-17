import React from 'react';

export default function Team({ team }) {
  return (
    <section className="team-detail">
      <div>
        <h2> {team.name} </h2>
      </div>
      <div>
        <p>City: {team.city}</p>
        <p>State: {team.state}</p>
        <p>Founded: {team.created_at}</p>
      </div>
    </section>
  );
}
