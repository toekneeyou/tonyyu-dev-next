import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import ViewportContextProvider from "./ui/contexts/ViewportContext";
import SideMenuContextProvider from "./ui/contexts/SideMenuContext";
import LoadingContextProvider from "./ui/contexts/LoadingContext";
import RefContextProvider from "./ui/contexts/RefContext";
import Body from "./ui/features/Body";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tony Yu - Frontend Developer",
  description:
    "Welcome to my portfolio! I'm Tony, a frontend developer skilled in modern web technologies such as HTML, CSS, JavaScript, TypeScript, and React. Explore my projects, my blog, and learn about my journey in web development.",
  authors: [{ name: "Tony Yu", url: "https://linkedin.com/in/tonyyu1129" }],
  keywords: [
    "frontend",
    "ui",
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "full stack",
  ],
  icons: {
    icon: "https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/favicon.png",
  },
  openGraph: {
    title: "Tony Yu - Frontend Developer",
    siteName: "Tony Yu - Frontend Developer",
    description:
      "Welcome to my portfolio! I'm Tony, a frontend developer skilled in modern web technologies such as HTML, CSS, JavaScript, TypeScript, and React. Explore my projects, my blog, and learn about my journey in web development.",
    images:
      "https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/IMG_6435.JPG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Yu - Frontend Developer",
    description:
      "Welcome to my portfolio! I'm Tony, a frontend developer skilled in modern web technologies such as HTML, CSS, JavaScript, TypeScript, and React. Explore my projects, my blog, and learn about my journey in web development.",
    images:
      "https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/IMG_6435.JPG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RefContextProvider>
        <SideMenuContextProvider>
          <ViewportContextProvider>
            <LoadingContextProvider>
              <Body>{children}</Body>
            </LoadingContextProvider>
          </ViewportContextProvider>
        </SideMenuContextProvider>
      </RefContextProvider>
    </html>
  );
}
