import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Лол',
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <div className="marketingLayout">{children}</div>;
}
