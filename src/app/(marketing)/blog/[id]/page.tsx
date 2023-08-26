'use client';
import Link from 'next/link';
const buffer = require('buffer').Buffer;

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type TPosts = IPost[];

export async function generateStaticParams() {
  const posts = (await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  )) as TPosts;

  return posts.map((post) => ({
    id: post.id,
    body: post.body,
  }));
}

async function getTrain(): Promise<string> {
  await new Promise<void>((res) => {
    setTimeout(() => res(), 2e3);
  });
  return 'zopa';
}

export default async function Page({ params }: { params: { postId: number } }) {
  const data = await getTrain();
  console.log(params);

  return (
    <div>
      <h1>My Post: {params.postId}</h1>
      <h1>
        <Link href={'/'}>Main</Link>
      </h1>
      <div>
        <h1>Very importand data: {data}</h1>
      </div>
    </div>
  );
}
