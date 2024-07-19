import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import { AppWrapper } from "./context/context";
import "./globals.css";
import { ThemeProviderWrapper } from "./themeProvider/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marcos Darricarrere's Portfolio.",
  description: "This is Marcos Darricarrere's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppWrapper>
          <ThemeProviderWrapper>
            <Header />
            {children}
            <Footer />
          </ThemeProviderWrapper>
        </AppWrapper>
      </body>
    </html>
  );
}
