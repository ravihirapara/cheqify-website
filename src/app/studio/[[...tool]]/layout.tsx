export const metadata = {
  title: "Cheqify Blog Studio",
  description: "Sanity Studio for managing Cheqify blog content",
};

export default function StudioLayout({
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
