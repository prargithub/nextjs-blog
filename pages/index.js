import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey guys, welcome to Prarthana's blog. Enjoy reading!</p>
        <p>
          This website will be similar to the one shown here:
          <br />
          <a href="https://nextjs.org/learn">Next.js blog tutorial</a>.
        </p>
        <h1 className="title">
          Read <Link href="/posts/first-post">my first blog here!</Link>
        </h1>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
            // <li className={utilStyles.listItem} key={id}>
            //   <Link href={`/posts/${id}`}>{title}</Link>
            //   <br />
            //   <small className={utilStyles.lightText}>
            //     <Date dateString={date} />
            //   </small>
            // </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
