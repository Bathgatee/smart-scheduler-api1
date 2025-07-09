import React, { useState } from 'react';

const LicenseForm = () => {
  const [key, setKey] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('https://your-backend-url/verify-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Enter Your License Key</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="XXXX-XXXX-XXXX"
          className="border rounded p-2"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Verifying...' : 'Verify Key'}
        </button>
      </form>
      {status === 'success' && <p className="text-green-600 mt-4 text-center">✅ Key is valid!</p>}
      {status === 'error' && <p className="text-red-600 mt-4 text-center">❌ Invalid key. Try again.</p>}
    </div>
  );
};

export default LicenseForm;
