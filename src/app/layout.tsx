import './globals.css';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'My Next.js App',
  description: 'Composable & Responsive',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}