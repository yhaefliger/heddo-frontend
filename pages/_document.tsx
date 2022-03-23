import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="fr">
      <Head />
      <body className="font-sans antialiased text-sm md:text-base text-gray-600 border-t-2 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
