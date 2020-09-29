import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-4xl font-bold mb-3">Welcome to my site</h1>
        <p className="text-gray-600">
          A place where I can put all of my goofy stuff.
        </p>
      </div>

      {/* posts go here */}
      {posts.map((post, index) => (
        <div key={index}>
          <Link href={`/${post.slug}`}>
            <a className="text-3xl text-blue-500 hover:text-blue-400 hover:underline font-bold">
              {post.title}
            </a>
          </Link>
        </div>
      ))}
    </>
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
