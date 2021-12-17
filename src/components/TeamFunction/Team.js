import React from 'react';

export default function Team({ teams: { city, created_at, name, state } }) {
  return (
    <section className="team-detail">
      <div>
        <h2> {name} </h2>
      </div>
      <div>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Founded: {created_at}</p>
      </div>
    </section>
  );
}
