import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary/70">
      <div className="relative flex flex-col items-center">
        {/* Outer glow ring */}
        <div className="absolute h-32 w-32 rounded-full border border-cyan-400/20 animate-ping"></div>

        {/* Rotating ring */}
        <div className="h-28 w-28 rounded-full border-4 border-secondary border-t-cyan-400 border-r-blue-500 animate-spin shadow-[0_0_40px_rgba(34,211,238,0.35)]"></div>

        {/* Center logo/text */}
        <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-secondary/70 shadow-inner shadow-cyan-500/20">
          <span className="text-5xl font-extrabold tracking-wider text-primary animate-pulse">
            Z
          </span>
        </div>

        {/* Brand name */}
        <h1 className="mt-10 text-4xl font-extrabold text-white">
          ZAPSHIFT
        </h1>

        {/* Loading dots */}
        <div className="mt-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce"></span>
          <span
            className="h-3 w-3 rounded-full bg-blue-400 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="h-3 w-3 rounded-full bg-indigo-400 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>

        <p className="mt-4 text-md font-bold text-black ">
          Powering your workflow...
        </p>
      </div>
    </div>
  );
};

export default Loading;