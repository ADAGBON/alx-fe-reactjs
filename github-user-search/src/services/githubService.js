import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: API_KEY ? `token ${API_KEY}` : '',
  },
});

export const searchUsers = async (username) => {
  const response = await githubApi.get(`/search/users?q=${username}`);
  return response.data;
};

export default githubApi;
