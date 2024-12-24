import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="valentine">
      <title>
        Recipe viewer
      </title>
      <body>
        <nav className="bg-red-500 p-4 text-white">
          <div className="container mx-auto flex justify-between">
            <Link href="/" className="text-xl p-2 font-bold hover:bg-red-900 rounded-lg">Home</Link>
            <Link href="/favorites" className="text-xl p-2 font-bold hover:bg-red-900 rounded-lg">Favorites</Link>
          </div>
        </nav>
        <main className="container mx-auto mt-4">{children}</main>
      </body>
    </html>
  );
}
