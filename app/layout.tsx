import "./global.css";

export const metadata = {
  title: "Aiswaryaa | Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-[#060b14] dark:text-white">
        {children}
      </body>
    </html>
  );
}
