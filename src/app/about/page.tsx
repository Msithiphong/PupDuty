import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#232323] text-[#d1d0c5]">
      <h1 className="text-4xl font-bold text-[#e2b714]">About PupDuty</h1>
      <p className="mt-4 max-w-2xl text-center text-[#d1d0c5]/80">
        PupDuty is designed to make dog care coordination simple and stress-free. Whether you're managing your dog's
        walks, feeding schedule, or grooming, PupDuty helps you stay organized and share responsibilities with others.
      </p>
    </div>
  );
}
