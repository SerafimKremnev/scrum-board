import './globals.css';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scrum Board',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
