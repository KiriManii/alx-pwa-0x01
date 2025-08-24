import { Html, Head, Main, NextScript } from "next/document";

// This file customizes the HTML structure of your application.
// It's not a regular page component, but helps set up the basic HTML, Head, and Body.
export default function Document() {
  return (
    // The <html> tag, specifying the language of your site.
    <Html lang="en">
      {/* The <Head> section is where we put metadata for the browser. */}
      <Head>
        {/* === NEW: Link to our Web App Manifest === */}
        {/* This tells the browser where to find your PWA's manifest file. */}
        <link rel="manifest" href="/manifest.json" />

        {/* === NEW: Define a theme color for the browser UI === */}
        {/* This sets the color of the browser's address bar or status bar on mobile devices. */}
        {/* We're using a blue color, you can match it to your app's theme! */}
        <meta name="theme-color" content="#0070f3" />
      </Head>
      {/* The <body> tag is where all your visible content goes. */}
      {/* `className="antialiased"` is a Tailwind CSS class for smoother text rendering. */}
      <body className="antialiased">
        {/* <Main /> is where Next.js injects your actual page content. */}
        <Main />
        {/* <NextScript /> includes Next.js scripts for optimized performance. */}
        <NextScript />
      </body>
    </Html>
  );
}
