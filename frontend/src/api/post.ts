import { CreatePostInterface, UpdatePostInterface } from "./interface/post";
export const FetchPosts = async () => {
  try {
    const response = await fetch(`${process.env.VITE_API_URL}/posts`);
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.error(err);
  }
};

export const FetchPost = async (post_id: string) => {
  const response = await fetch(`${process.env.VITE_API_URL}/posts/${post_id}`);
  const jsonData = await response.json();
  return jsonData;
};

export const CreatePost = async (data: CreatePostInterface) => {
  const response = await fetch(`${process.env.VITE_API_URL}/posts`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ data }),
  });
  const jsonData = await response.json();
  return jsonData;
};

export const UpdatePost = async (
  post_id: string,
  data: UpdatePostInterface
) => {
  const response = await fetch(`${process.env.VITE_API_URL}/posts/${post_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  const jsonData = await response.json();
  return jsonData;
};

export const DeletePost = async (post_id: string) => {
  const response = await fetch(`${process.env.VITE_API_URL}/posts/${post_id}`, {
    method: "DELETE",
  });
  const jsonData = await response.json();
  return jsonData;
};
