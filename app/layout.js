import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mechatron.id"),
  title: "Mechatron",
  description:
    "Mechatron menghadirkan inovasi drone pertanian, sistem ground control, dan teknologi otonom pintar mutakhir di Indonesia.",
  icons: {
    icon: "/images/mechatron_logo.png",
    apple: "/images/mechatron_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#EDEDED] text-[#000000]">
        {children}
      </body>
    </html>
  );
}
