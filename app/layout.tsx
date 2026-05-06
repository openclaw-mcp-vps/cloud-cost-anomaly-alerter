import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Cost Anomaly Alerter — Instant Alerts for Unexpected Cloud Bill Spikes",
  description: "Real-time monitoring that catches cloud cost anomalies within hours, not weeks. Connect AWS, GCP, and Azure to get instant alerts via email, Slack, or webhooks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="81a0e49f-45e7-47e8-9972-7b5b56aa6848"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
