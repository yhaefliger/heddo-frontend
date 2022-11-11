import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="fr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:image"
          content={`${
            process.env.NEXT_PUBLIC_SITE_URL || "https://www.sara-massages.ch"
          }/og-image.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className="font-sans antialiased text-base text-gray-600 h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
