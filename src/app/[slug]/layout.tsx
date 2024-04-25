import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokedex by ID | Pensieve",
  description: "A frontend Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div className="max-w-7xl m-auto p-5">{children}</div>
    </div>
  );
}
