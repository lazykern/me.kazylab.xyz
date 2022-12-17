import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

import "../styles/notion.css";
import "../styles/prism.css";
import "katex/dist/katex.min.css";

import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Layout>
                <NextNProgress />
                <DefaultSeo
                    title="phusitsom"
                    description="phusitsom's personal website"
                    openGraph={{
                        type: "website",
                        locale: "en_US",
                        url: "https://phusitsom.me",
                        siteName: "phusitsom",
                        images: [
                            {
                                url: "https://res.cloudinary.com/dmkf8hcda/image/upload/v1671301788/phusitsom.me/og-image-default_ycdt9p.png",
                                width: 1200,
                                height: 630,
                                alt: "phusitsom.me",
                                type: "image/png",
                            },
                        ],
                    }}
                    twitter={{
                        handle: "@handle",
                        site: "@site",
                        cardType: "summary_large_image",
                    }}
                />
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
