export const metadata = {
  title: 'Horumarka',
  description: 'Horumarka is your trusted partner in delivering top-notch services that drive success. We specialize in innovative solutions that help businesses achieve their goals, optimize performance, and elevate customer satisfaction. Let us empower your business with the right tools and expertise for growth.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
