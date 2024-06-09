import { PostCard } from "../postcard/PostCard";

type Post = {
  name: string;
  icon: string;
  content: string;
};
const posts: Post[] = [
  { name: "hoge1", icon: "", content: "content1" },
  { name: "hoge2", icon: "", content: "content2" },
  { name: "hoge3", icon: "", content: "content3" },
];
export const CardList = () => {
  return (
    <div>
      {posts.map((post: Post) => (
        <PostCard
          key={post.name}
          name={post.name}
          icon={post.icon}
          content={post.content}
        />
      ))}
    </div>
  );
};
