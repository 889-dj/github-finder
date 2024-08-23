const API_URL = 'https://api.github.com/users';

export async function getUser(username) {
  const response = await fetch(`${API_URL}/${username}`);
  const data = await response.json();
  return data;
}

export async function getUserRepos(username) {
  const response = await fetch(`${API_URL}/${username}/repos`);
  const data = await response.json();
  return data;
}