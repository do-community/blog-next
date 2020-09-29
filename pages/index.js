import Link from "next/link";

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div className="container mx-auto px-10 py-20">
      <h1 className="text-6xl font-bold mb-20">Welcome to my site</h1>

      {/* posts go here */}
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const url = process.env.API_URL;
  const res = await fetch(`${url}/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
