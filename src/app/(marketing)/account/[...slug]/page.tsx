async function getTrain(): Promise<string> {
  await new Promise<void>((res) => {
    setTimeout(() => res(), 1e3);
  });

  return 'zopa';
}

export default async function Account({ params }: { params: { slug: string[] } }) {
  const data = await getTrain();
  return <div>Account: {params.slug.join()}</div>;
}
