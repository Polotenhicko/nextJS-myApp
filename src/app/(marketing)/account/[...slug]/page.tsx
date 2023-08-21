// 'use client';
export default function Account({ params }: { params: { slug: string[] } }) {
  console.log(params);

  return <div>Account: {params.slug.join()}</div>;
}
