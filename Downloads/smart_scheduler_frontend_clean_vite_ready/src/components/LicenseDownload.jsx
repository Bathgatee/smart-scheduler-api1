
import React, { useState } from "react";

const LicenseDownload = () => {
  const [licenseKey, setLicenseKey] = useState("");
  const [status, setStatus] = useState("");

  const handleDownload = async () => {
    setStatus("Checking license...");
    try {
      const response = await fetch("http://localhost:4242/validate-license", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ license_key: licenseKey }),
      });

      if (!response.ok) {
        const error = await response.json();
        setStatus(`❌ ${error.error}`);
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "SmartSchedulerInstaller_v1.exe";
      a.click();
      setStatus("✅ Download started!");
    } catch (err) {
      setStatus("⚠️ Network error");
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white shadow-md max-w-md mx-auto mt-12">
      <h2 className="text-xl font-bold mb-4">Enter License Key to Download</h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-3"
        placeholder="XXXX-XXXX-XXXX-XXXX"
        value={licenseKey}
        onChange={(e) => setLicenseKey(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        onClick={handleDownload}
      >
        Validate & Download
      </button>
      <div className="mt-3 text-sm text-gray-700">{status}</div>
    </div>
  );
};

export default LicenseDownload;
