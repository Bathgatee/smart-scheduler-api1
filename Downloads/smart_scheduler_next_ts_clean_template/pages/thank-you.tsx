import { useState } from 'react';
import Head from 'next/head';

export default function ThankYou() {
  const [key, setKey] = useState('');
  const [valid, setValid] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/verify-key', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key: key }),
    });
    const data = await res.json();
    setValid(data.valid);
  };

  return (
    <>
      <Head><title>Thank You | Smart Scheduler</title></Head>
      <main>
        <h2>Enter your license key to download</h2>
        <form onSubmit={handleSubmit}>
          <input value={key} onChange={e => setKey(e.target.value)} placeholder="License key" />
          <button type="submit">Submit</button>
        </form>
        {valid === true && (
          <a href="/download">✅ Download Smart Scheduler</a>
        )}
        {valid === false && <p>❌ Invalid key</p>}
      </main>
    </>
  );
}
