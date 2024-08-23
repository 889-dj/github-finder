import { getUser, getUserRepos } from '@/utils/github';
import Link from 'next/link';
import Image from 'next/image'

export default async function ProfilePage({ params }) {
  const { username } = params;
  const user = await getUser(username);
  const repos = await getUserRepos(username);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <div className="flex items-center mb-4">
            <Image
              src={user.avatar_url}
              alt={user.login}
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-500">{user.login}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <p className="font-bold">{user.followers}</p>
              <p className="text-gray-500">Followers</p>
            </div>
            <div>
              <p className="font-bold">{user.following}</p>
              <p className="text-gray-500">Following</p>
            </div>
            <div>
              <p className="font-bold">{user.public_repos}</p>
              <p className="text-gray-500">Repos</p>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">Description</h3>
          <p>{user.bio || 'No bio available'}</p>
          <h3 className="text-lg font-bold mb-2 mt-4">Repositories</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id} className="mb-2">
                <a  
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="mt-4 text-blue-500 hover:underline">
          Back to Search
        </Link>
      </div>
    </>
  );
}