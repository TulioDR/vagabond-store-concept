import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <link
               href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
               rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin=""
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
