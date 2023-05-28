import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    let description = "Learn how the effect of guilt on the human mind is depicted through sleep, in Shakespeare's play Macbeth";
    let sitename = "Macbeth's Torment";
    let title = "Macbeth's Torment";

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={description} />
          <meta property="og:site_name" content={sitename} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
        </Head>
        <body className="bg-[#17181C] text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
