import Link from 'next/link';
import Image from 'next/image';

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
      <Image
        src="/images/godspeed.jpg"
        height={300}
        width={300}
        alt="godspeed"
      />
    </>
  );
}
