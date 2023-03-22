import { useState, useEffect } from "react";

export function usePost(id) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(
        `https://api.noroff.dev/api/v1/online-shop/${id}`
      );
      const data = await response.json();
      setPost(data);
    }

    fetchPost();
  }, [id]);

  return post;
}
