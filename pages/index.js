// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <Link href="/gallery">
        <a>Go to Gallery</a>
      </Link>
    </div>
  );
}
