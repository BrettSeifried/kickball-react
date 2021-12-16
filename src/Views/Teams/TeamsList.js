import { useEffect, useState } from 'react';
import Team from '../../components/TeamFunction/Team';
import { getTeams } from '../../services/teamRoute';

export default function TeamsList() {
  return (
    <ul className="team-list">
      <li>TEAM NAME</li>
    </ul>
  );
}
