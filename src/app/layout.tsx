import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import RootProvider from '@/components/layout/RootProvider';
import RootLayout from '@/components/layout/RootLayout';
import StyledComponentsRegistry from '@/lib/registry';

const noto = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dreamery',
  description: 'this is your dreamery',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={noto.className} cz-shortcut-listen='true'>
        <StyledComponentsRegistry>
          <RootProvider>
            <RootLayout>{children}</RootLayout>
          </RootProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
