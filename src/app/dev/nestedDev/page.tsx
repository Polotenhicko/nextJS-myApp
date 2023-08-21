import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Link href={'/'}>main</Link>
      <Link href={'/dev'}>dev</Link>
    </div>
  );
}
