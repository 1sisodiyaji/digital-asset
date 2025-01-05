import "./globals.css";
import { Roboto } from 'next/font/google'
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Digital Asset manager",
  description: "You can manage your assets upto 25gb From imagekit in any format.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
        <Providers>
          <Toaster/>
          <Header />
          <main className="container mx-auto ">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
