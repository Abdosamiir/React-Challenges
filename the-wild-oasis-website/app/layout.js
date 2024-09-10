import Logo from "@/app/_components/Logo";
import Navigaton from "@/app/_components/Navigaton";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome To The Wild Oasis",
  },
  description: "Welcome to The Wild Oasis Luxury Cabin Rental.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-50 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigaton />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
