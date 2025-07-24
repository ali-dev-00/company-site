import type { Metadata } from "next";
import "../globals.css"
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";



export const metadata: Metadata = {
  title: 'Horumarka',
  description: 'Horumarka is your trusted partner in delivering top-notch services that drive success. We specialize in innovative solutions that help businesses achieve their goals, optimize performance, and elevate customer satisfaction. Let us empower your business with the right tools and expertise for growth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
