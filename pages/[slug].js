export default function Post({ post }) {
  console.log(post);

  return <div>single post goes here</div>;
}

export async function getStaticPaths() {
  const url = process.env.API_URL;
  const res = await fetch(`${url}/posts`);
  const posts = await res.json();
  
  const paths = !posts ? [] : posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const url = process.env.API_URL;
  const res = await fetch(`${url}/posts?slug=${slug}`);
  const post = await res.json();

  return {
    props: { post },
  };
}
