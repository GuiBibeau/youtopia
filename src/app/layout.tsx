import "./globals.css";
import SplitbeeProvider from "@/hooks/splitbe-provider";

import { BackgroundWave } from "@/components/atoms/WaveBackground";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <SplitbeeProvider>
          <main className="h-full">{children}</main>
        </SplitbeeProvider>
        <BackgroundWave />
      </body>
    </html>
  );
}
