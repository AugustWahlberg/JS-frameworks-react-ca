import { useState, useEffect } from 'react';

export function usePosts() {
  const url = 'https://api.noroff.dev/api/v1/online-shop';

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setPosts(json);
    }
    getData();
  }, []);

  return posts;
}