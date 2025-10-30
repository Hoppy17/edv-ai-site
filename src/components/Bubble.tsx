import { useState } from "react";

function Bubble({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openClasses = open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0";

  return (
    <div className="w-full max-w-3xl text-center">
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#f4ede1] text-[#122e22] font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        {title}
      </button>
      <div
        className={"mt-6 mx-auto max-w-2xl text-[#122e22] text-base leading-relaxed overflow-hidden transition-all duration-500 ease-in-out " + openClasses}
      >
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}

export default Bubble;
