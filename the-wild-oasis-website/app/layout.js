import Logo from "./components/Logo";
import Navigaton from "./components/Navigaton";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigaton />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
