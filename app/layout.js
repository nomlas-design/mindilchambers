import { Hind_Siliguri } from 'next/font/google';
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
      <body className={hind_siliguri.className}>
        <div id='root'>{children} </div>
      </body>
    </html>
  );
}
