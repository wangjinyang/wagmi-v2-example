import { useState, useEffect } from "react";
import { AppProps } from "next/app";

import Providers from "./providers";

export default function RootLayout({ Component }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <Providers>{mounted && <Component />}</Providers>;
}
