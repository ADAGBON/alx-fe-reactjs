import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username && !location && !minRepos) return;
    setLoading(true);
    setError('');
    setUser(null);
    setUsers([]);
    setPage(1);
    try {
      if (username && !location && !minRepos) {
        const data = await fetchUserData(username);
        setUser(data);
      } else {
        const data = await searchUsers(username, location, minRepos);
        setUsers(data.items);
        setTotalCount(data.total_count);
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    try {
      const data = await searchUsers(username, location, minRepos, nextPage);
      setUsers(prev => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError('Looks like we cant find the user');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (e.g. Lagos)"
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories"
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {user && (
        <div className="border rounded p-4 flex gap-4 items-center">
          <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">{user.name || user.login}</h3>
            {user.location && <p className="text-gray-600">Location: {user.location}</p>}
            <p className="text-gray-600">Repos: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Profile
            </a>
          </div>
        </div>
      )}

      {users.length > 0 && (
        <div>
          <p className="text-gray-500 mb-4">{totalCount} users found</p>
          <ul className="flex flex-col gap-4">
            {users.map(u => (
              <li key={u.id} className="border rounded p-4 flex gap-4 items-center">
                <img src={u.avatar_url} alt={u.login} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-bold">{u.login}</h3>
                  <a href={u.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
          {users.length < totalCount && (
            <button onClick={handleLoadMore} className="mt-4 bg-gray-200 rounded p-2 w-full hover:bg-gray-300">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
