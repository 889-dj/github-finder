'use client'
import FloatingAnimation from '@/components/FloatingAnimation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/profile/${searchQuery}`);
  };

  return (
    <main>
      <FloatingAnimation />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl text-gray-900 font-bold mb-4">GitHub Finder</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Search for a GitHub user..."
              className="flex-1 border-2 border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md"
              onClick={handleSearch}
            >
              🔎
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}