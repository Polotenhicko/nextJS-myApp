import Link from 'next/link';

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
  }));
}

export default function Page({ params }: { params: { postId: number } }) {
  return (
    <div>
      My Post: {params.postId}
      <div>
        <Link href={'/'}>Main</Link>
      </div>
    </div>
  );
}
