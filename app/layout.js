import { Hind_Siliguri } from 'next/font/google';
import PiwikProProvider from '@piwikpro/next-piwik-pro';
import NomlasTag from '@/app/components/NomlasTag';
import './globals.scss';

export const metadata = {
  title: 'Mindil Chambers | Criminal Barristers',
  description: 'Northern Territory criminal barristers',
};

export const hind_siliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='MgHur_2ovFVcj0pmZ7NPHzKT0bXW320uJghb_GPWDbg'
        />
      </head>
      <body className={hind_siliguri.className}>
        <PiwikProProvider
          containerUrl={process.env.NEXT_PUBLIC_CONTAINER_URL}
          containerId={process.env.NEXT_PUBLIC_CONTAINER_ID}
        >
          <div id='root'>{children}</div>
        </PiwikProProvider>
        <NomlasTag />
      </body>
    </html>
  );
}
