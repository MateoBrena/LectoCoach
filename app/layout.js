import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "LectoCoach",
  description: "Mejora tu comprensión lectora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <Header />
        <main className="pt-20 px-4 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}