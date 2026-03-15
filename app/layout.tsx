import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'IjmaView – Islamische Rechtsmeinungen im Überblick',
  description:
    'IjmaView stellt zu Fiqh-Fragestellungen die Meinungen aller großen Gelehrten und Rechtsschulen strukturiert gegenüber – quellenbasiert, neutral und vergleichbar.',
  openGraph: {
    title: 'IjmaView – Islamische Rechtsmeinungen im Überblick',
    description:
      'Quellenbasierte Darstellung islamischer Rechtsmeinungen aller vier Rechtsschulen.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
