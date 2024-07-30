import { Sen } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const Josef = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Home Axill",
  description: "Home-axil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josef.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
