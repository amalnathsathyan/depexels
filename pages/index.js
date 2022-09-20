import Head from 'next/head';
import { upload } from './../components/upload';

export default function Home() {
  return (
    <div>
      <Head>
        <title>dePexels</title>
        <link rel="icon" href="/dePexels.png"></link>
      </Head>
      <div>
        <input type="file" placeholder="select" id="file-select" />
        <button id="uploadBtn">UPLOAD</button>
      </div>
    </div>
  );
}
