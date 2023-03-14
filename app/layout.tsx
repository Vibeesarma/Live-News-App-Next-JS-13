import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* we add provider here because layout by default server componet if we want to add any provider that we want client componet that we do like this */}
      <Providers>
        <body className="bg-gray-100 transition-all dark:bg-zinc-900 duration-700">
          <Header />
          <div className="max-w-6xl mx-auto px-5">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
