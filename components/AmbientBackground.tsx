"use client";

import { motion } from "motion/react";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
  animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-[#224248]/20 blur-[120px]"
/>
<motion.div
  animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
  transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-[-10%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[#3EB8A9]/10 blur-[120px]"
      />
      <div className="absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')]" />
    </div>
  );
}