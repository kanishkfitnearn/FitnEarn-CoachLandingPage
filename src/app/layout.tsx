import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitnEarnPal - A Global Platform for Fitness and Health Coaches",
  description:
    "FitnEarnPal is the ultimate platform for fitness and health coaches. Share blogs, host live sessions, and inspire users globally. Join now to expand your reach and monetize your expertise.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          FitnEarnPal - A Global Platform for Fitness and Health Coaches
        </title>
        <meta
          name="description"
          content="Join FitnEarnPal, the ultimate platform for health and fitness coaches. Share your expertise, engage with users, and grow your brand globally with tools for blog writing, live sessions, and content creation."
        />
        <meta
          name="keywords"
          content="FitnEarnPal, fitness coaches platform, health coaches, global platform for coaches, blog writing for coaches, live sessions, content creation, workout videos, coach community, fitness inspiration, global health platform"
        />
        <meta name="author" content="Fit Earn Meditate" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="bg-neutral-900">{children}</body>
    </html>
  );
}
