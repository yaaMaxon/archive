import NavBar from "@components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@components/Footer";
import { TableProvider } from "./context";
import expertDocuments from "@assets/img/ExpertDocuments.webp";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  applicationName: "Arhiv",
  title: "Arhiv - Архівні послуги",
  description:
    "Arhiv - aрхівування, експертна оцінка, палітурка, знищення та оптимізація документообігу, широкий спектр архівних послуг у Львові з гарантією безпеки й доступності в будь-який час.",
  keywords: [
    "архівні послуги львівська область",
    "послуги архівних установ",
    "приватний архів",
    "послуги архіваріуса",
    "зберігання документації",
    "архівна установа львівська область",
    "здати документи в архів",
    "передача документів до архіву",
    "експертна оцінка документів",
    "експертиза цінності документів",
    "архівування документів",
    "архівна обробка документів ціна",
    "упорядкування документів",
    "знищення документів",
    "зберігання архівних документів",
    "архів для приватних фірм",
  ],
  openGraph: {
    title: "Arhiv - Архівні послуги Львів",
    description:
      "Arhiv - aрхівування, експертна оцінка, палітурка, знищення та оптимізація документообігу, широкий спектр архівних послуг у Львові з гарантією безпеки й доступності в будь-який час.",
    images: [
      {
        url: expertDocuments.src,
        width: 800,
        height: 600,
        alt: "Arhiv - Архівні послуги",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arhiv - Архівні послуги Львів",
    description:
      "Arhiv - aрхівування, експертна оцінка, палітурка, знищення та оптимізація документообігу, широкий спектр архівних послуг у Львові з гарантією безпеки й доступності в будь-який час.",
    images: [
      {
        url: expertDocuments.src,
        width: 800,
        height: 600,
        alt: "Arhiv - Архівні послуги",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <TableProvider>
          <NavBar />
          {children}
          <Footer />
        </TableProvider>
      </body>
    </html>
  );
}
