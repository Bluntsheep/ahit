import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AHIT",
  description:
    "Get reliable Networking and IT services in Cape Town with 24/7 I.T. support. Our expert team ensures your business stays connected and secure. Contact us today!",
  keywords: [
    "Networking Solutions",
    "Server Management",
    "VoIP Services",
    "CCTV Camera Systems",
    "Network Infrastructure",
    "Server Maintenance",
    "VoIP Phone Systems",
    "Surveillance Systems",
    "Network Security",
    "Server Installation",
    "VoIP Solutions",
    "CCTV Installation",
    "Network Support",
    "Server Upgrades",
    "VoIP Integration",
    "CCTV Monitoring",
    "Network Management",
    "Server Administration",
    "VoIP Deployment",
    "CCTV Security",
  ],
  og: {
    title: "Networking and IT Services in Cape Town | 24/7 I.T. Support",
    description:
      "Get reliable Networking and IT services in Cape Town with 24/7 I.T. support. Our expert team ensures your business stays connected and secure. Contact us today!",
    url: "https://www.yourwebsite.com",
  },
  twitter: {
    title: "Networking and IT Services in Cape Town | 24/7 I.T. Support",
    description:
      "Get reliable Networking and IT services in Cape Town with 24/7 I.T. support. Our expert team ensures your business stays connected and secure. Contact us today!",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
