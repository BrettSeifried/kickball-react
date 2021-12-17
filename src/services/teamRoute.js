import client from './client';

export async function fetchTeams() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/teams?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

export async function getTeamById(id) {
  let request = await client.from('teams').select(`*, players (*)`).match({ id }).single();
  return request;
}
