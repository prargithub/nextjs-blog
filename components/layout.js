import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";

const name = "Prarthana";
export const siteTitle = "Nextjs blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/img3.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              className={utilStyles.headingXl}
            >
              {name}
            </Text>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/img3.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
                  {name}
                </Text>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <h2 style={{ color: "#8F21BE", fontSize: "25px" }}>
              ← Back to home
            </h2>
          </Link>
        </div>
      )}
    </div>
  );
}
