import Link from 'next/link';

export default function About() {
  return (
    <>
      <div>About</div>
      <h2>
        <Link className="text-blue-500 underline" href="/">
          Back to home
        </Link>
      </h2>
    </>
  );
}
