import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Muhammad Adnan | Full Stack Developer & WhatsApp Marketing Expert",
  description:
    "Muhammad Adnan is a full stack developer and WhatsApp marketing expert specializing in scalable web, desktop, and mobile apps, chatbots, CRMs, and custom social media marketing & automation tools.",
  keywords: [
    "Muhammad Adnan",
    "full stack developer",
    "WhatsApp marketing expert",
    "frontend developer",
    "backend developer",
    "chatbot developer",
    "CRM developer",
    "software engineer",
    "web apps",
    "desktop apps",
    "mobile apps",
    "automation tools",
    "custom social media marketing tools",
    "social media automation tools",
  ],

  authors: [{ name: "Muhammad Adnan" }],
  metadataBase: new URL("https://muhammadadnan.dev"),
  alternates: {
    canonical: "https://www.muhammadadnan.dev",
  },

  openGraph: {
    type: "website",
    url: "https://muhammadadnan.dev/",
    siteName: "Muhammad Adnan",
    title:
      "Muhammad Adnan | Full Stack Developer & WhatsApp Marketing Expert",
    description:
      "Full stack developer and WhatsApp marketing expert delivering modern web, desktop, and mobile applications, custom chatbots, CRM solutions, and innovative social media marketing & automation tools.",
    images: [
      {
        url: "https://muhammadadnan.dev/profile.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Adnan – Full Stack Developer & WhatsApp Marketing Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Muhammad Adnan | Full Stack Developer & WhatsApp Marketing Expert",
    description:
      "Full stack developer and WhatsApp marketing expert creating scalable apps, automation solutions, and custom social media marketing tools.",
    images: ["https://muhammadadnan.dev/profile.png"],
  },

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Adnan",
      url: "https://muhammadadnan.dev",
      image: "https://muhammadadnan.dev/profile.png",
      sameAs: [
        "https://github.com/oymusafir",
        "https://linkedin.com/in/oymusafir",
      ],
      jobTitle: "Full Stack Developer & WhatsApp Marketing Expert",
      description:
        "Muhammad Adnan is a full stack developer and WhatsApp marketing expert specializing in scalable applications, CRM systems, and custom social media marketing & automation tools.",
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
