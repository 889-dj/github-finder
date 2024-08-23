const API_URL = 'https://api.github.com/users';

export async function getUser(username) {
  const response = await fetch(`${API_URL}/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
}

export async function getUserRepos(username) {
  const response = await fetch(`${API_URL}/${username}/repos`);
  if (!response.ok) {
    throw new Error('Failed to fetch user repositories');
  }
  return response.json();
}