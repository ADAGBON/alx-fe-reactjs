import axios from 'axios';

const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

const searchUsers = async (username, location = '', minRepos = '') => {
  let query = username ? `${username}` : '';
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );
  return response.data;
};

export { fetchUserData, searchUsers };
