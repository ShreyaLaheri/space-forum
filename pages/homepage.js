import TopBar from "../components/topbar";
import Select from "../components/select";
import Post from "../components/post";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/spectre.css/dist/spectre.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <TopBar />
      <Select />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
