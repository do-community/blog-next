import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto px-10 py-20">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
