import Link from 'next/link';

import Button from '@mui/material/Button';

export default function About() {
  return (
    <>
      <div>About</div>
      <h2>
        <Link className="text-blue-500 underline" href="/">
          Back to home
        </Link>
      </h2>
      <div>
        <Button variant="contained">Test MaterialUI</Button>
      </div>
    </>
  );
}
