import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Muhammad Adnan | Full Stack Developer & WhatsApp Marketing Expert",
  description:
    "Muhammad Adnan is a full stack developer and WhatsApp marketing expert, building apps, CRMs, chatbots, and WhatsApp Cloud API solutions.",
  keywords: [
    "Muhammad Adnan",
    "WhatsApp marketing expert",
    "WhatsApp Cloud API",
    "software engineer",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "chatbot developer",
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
      "Full stack developer and WhatsApp marketing expert specializing in apps, chatbots, CRMs, and WhatsApp Cloud API solutions.",
    images: [
      {
        url: "https://muhammadadnan.dev/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Adnan | Full Stack Developer & WhatsApp Marketing Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Muhammad Adnan | Full Stack Developer & WhatsApp Marketing Expert",
    description:
      "Full stack developer and WhatsApp marketing expert specializing in apps, chatbots, CRMs, and WhatsApp Cloud API solutions.",
    images: ["https://muhammadadnan.dev/profile.jpg"],
  },

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Adnan",
      url: "https://muhammadadnan.dev",
      image: "https://muhammadadnan.dev/profile.jpg",
      sameAs: [
        "https://github.com/oymusafir",
        "https://linkedin.com/in/oymusafir",
      ],
      jobTitle: "Full Stack Developer & WhatsApp Marketing Expert",
      description:
        "Full stack developer and WhatsApp marketing expert specializing in apps, chatbots, CRMs, and WhatsApp Cloud API solutions.",
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
