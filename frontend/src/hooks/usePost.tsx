import { useEffect, useState } from "react";
import { PostInterface } from "../api/interface/post";
import { FetchUsers } from "../api/user";

export const usePost = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const fetchPosts = async () => {
    try {
      const data = await FetchUsers();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, fetchPosts };
};
