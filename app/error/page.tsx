import Link from 'next/link';

export default function ErrorPage() {
  return (
    <>
      <p>Sorry, something went wrong</p>
      <Link className="z-[1000] fixed top-4 right-4 bg-white p-4" href="/">
        Home
      </Link>
    </>
  );
}
