import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import { Box, Text } from "@chakra-ui/react";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Box
          w="100%"
          h="200px"
          // bgGradient="linear(to-r, green.200, pink.500)"
        />
        {/* <Box w="100%" h="200px" background="linear(to-l, #7928CA, #FF0080)">
          <Head>
            <title>Blog First Post</title>
          </Head>
        </Box> */}
        <Box w="100%" h="200px" bgGradient="linear(to-l, #7928CA, #FF0080)" />

        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
        <h1>First Post</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam
          nam suscipit maxime similique fuga ab architecto delectus ut
          necessitatibus, alias perspiciatis modi ipsum quis vitae accusamus
          temporibus, tempora aliquid!
        </p>
        {/* <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome to Chakra UI
        </Text> */}
      </Layout>
    </>
  );
}
