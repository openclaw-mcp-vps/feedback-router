import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackRouter – Smart routing of customer feedback to right teams",
  description: "AI categorizes support tickets and feedback, then routes them to engineering, product, or sales automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d3517089-b3d2-4f21-ae03-0fb99fb24bc6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
