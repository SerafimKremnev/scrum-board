import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import SmoothScroll from '@/shared/ui/SmoothScroll/SmoothScroll';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Шрифты
// const Roboto = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Robotocondensed.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
//   display: 'swap',
//   variable: '--base-font',
// });
// ? clsx(Roboto.variable) для body

export const metadata: Metadata = {
  title: 'Next.js Project',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et',
  // Шаблонизация добавления фавиконок
  // ...generateIcons()
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <SmoothScroll>
          <div id="app">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
