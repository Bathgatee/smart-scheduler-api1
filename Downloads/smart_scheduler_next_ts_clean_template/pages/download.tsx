import Head from 'next/head';

export default function Download() {
  return (
    <>
      <Head><title>Download | Smart Scheduler</title></Head>
      <main>
        <h2>Thank you for verifying your license!</h2>
        <a href="/SmartSchedulerInstaller.exe" download>
          ✅ Click here to download Smart Scheduler
        </a>
      </main>
    </>
  );
}
