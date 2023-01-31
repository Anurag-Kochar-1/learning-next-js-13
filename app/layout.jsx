import './globals.css'
import { Nunito } from "@next/font/google"

const Nunito_Font = Nunito({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-Nunito"
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${Nunito_Font.className}`}>
        {children}
      </body>
    </html>
  )
}
