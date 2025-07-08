import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  const handleBuy = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST'
    });
    const data = await res.json();
    router.push(data.url);
  };

  return (
    <>
      <Head>
        <title>Smart Scheduler | Automated Production Scheduling</title>
        <meta name="description" content="Smart Scheduler automates production scheduling for manufacturers." />
        <meta name="keywords" content="production scheduling, manufacturing software, smart scheduler, download" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Smart Scheduler" />
        <meta property="og:description" content="Automated production scheduling software for manufacturers." />
        <meta property="og:url" content="https://mfgscheduler.com" />
      </Head>
      <main>
        <h1>Smart Scheduler</h1>
        <p>Production scheduling software for manufacturers.</p>
        <button onClick={handleBuy}>Buy Now</button>
      </main>
    </>
  );
}
