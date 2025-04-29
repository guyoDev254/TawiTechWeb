import "@/app/globals.css"
import { Inter } from "next/font/google"
import { PageTransition } from "@/components/page-transition"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TawiTech Africa - Innovative Software Solutions",
  description: "Custom software development and IT consulting services for businesses of all sizes.",
}

import { ReactNode } from "react";
import { Footer } from "@/components/footer"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-1 justify-center items-center">
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
        <Header />
          <PageTransition>{children}</PageTransition>
        <Footer />
        {/* </ThemeProvider> */}
        </div>
      </body>
    </html>
  )
}
