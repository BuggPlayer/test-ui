import Footer from "@/components/navigation/footer";
import Navigation from "@/components/navigation/navigation";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* @ts-expect-error Async Server Component */}
        <Navigation />
        <div className="pt-10 min-h-[calc(100vh-300px)]">{children}</div>
        {/* @ts-expect-error Async Server Component */}
        <Footer />
      </body>
    </html>
  );
}
