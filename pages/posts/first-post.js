import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import { Box, Text } from "@chakra-ui/react";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <br />
        <Box w="100%" bgGradient="linear(to-l, white, #7928CA, #FF0080, white)">
          <Text align="center" fontSize="3xl" color="white">
            First Post
          </Text>
        </Box>

        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam
          nam suscipit maxime similique fuga ab architecto delectus ut
          necessitatibus, alias perspiciatis modi ipsum quis vitae accusamus
          temporibus, tempora aliquid!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur
          cumque impedit eum vitae iusto odio quae voluptatibus! Odit laudantium
          reiciendis, laboriosam soluta iure a provident ad distinctio nam
          ducimus!
        </p>
      </Layout>
    </>
  );
}
