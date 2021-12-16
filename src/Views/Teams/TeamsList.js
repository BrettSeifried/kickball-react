import { useEffect, useState } from 'react';
import Team from '../../components/TeamFunction/Team';
import { getTeams } from '../../services/teamRoute';
import { Link } from 'react-router-dom';

export default function TeamsList() {
  return (
    <ul className="team-list">
      <li>
        <Link to={'/teams/1'}> TEAM NAME</Link>
      </li>
    </ul>
  );
}
