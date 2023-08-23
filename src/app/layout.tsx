import './globals.css';
import { ReduxWrapper } from '@/app/components/ReduxWrapper';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  console.log(usePathname());
  console.log('render root layout');

  return (
    <html lang="ru">
      <body className={inter.className}>
        <ReduxWrapper>{children}</ReduxWrapper>
      </body>
    </html>
  );
}
