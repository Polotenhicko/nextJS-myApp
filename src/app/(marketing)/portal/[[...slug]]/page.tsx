export default function Portal({ params }: { params: { slug?: string[] } }) {
  return <div>Portal: {params.slug?.join()}</div>;
}
