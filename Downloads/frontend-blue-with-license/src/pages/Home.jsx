
import { useState } from "react";
import { Button } from "../components/ui/button";

function Home() {
  const [fileName, setFileName] = useState("No file chosen");

  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <div className="bg-white text-black rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Upload Your Schedule</h1>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={(e) => setFileName(e.target.files[0]?.name || "No file chosen")}
        />
        <label htmlFor="fileInput">
          <Button>Choose File</Button>
        </label>
        <p className="mt-2">{fileName}</p>
      </div>
    </div>
  );
}

export default Home;
