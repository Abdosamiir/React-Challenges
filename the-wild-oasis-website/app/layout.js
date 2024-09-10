import Logo from "@/app/_components/Logo";
import Navigaton from "@/app/_components/Navigaton";
import "@/app/_styles/globals.css";
export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-50 min-h-screen">
        <header>
          <Logo />
          <Navigaton />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
