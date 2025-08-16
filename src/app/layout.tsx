import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khushboo Kumari",
  description: "Frontend Developer and React JS Developer",
  manifest: "/manifest.json",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Khushboo Kumari",
    "alternateName": "Khushboo",
    "birthDate": "2004-02-06",
    "jobTitle": "Frontend Developer and React JS Developer",
    "image": "https://your-domain.com/profile.jpg",
    "description":
      "Frontend Developer with expertise in React, Next.js, and modern web development. Experienced in building responsive and interactive web applications.",
    "email": "mailto:ksingh200601@gmail.com",
    "telephone": "+91-9835587951",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Town",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "url": "https://your-domain.com",
    "sameAs": [
      "https://github.com/Khush0601",
      "https://wa.me/9835587951",
      "https://drive.google.com/file/d/1vKrOwRraRA4H7buKyR_jfq4f6XDfXVB4/view?usp=sharing"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Python",
      "Django",
      "GitHub"
    ],

    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "Bookstore",
        "url": "https://aquamarine-malabi-ff3950.netlify.app/home",
        "description":
          "Online bookstore with secure login, search, checkout, order tracking, and interactive UI."
      },
      {
        "@type": "CreativeWork",
        "name": "Pet Management",
        "url": "https://creative-stroopwafel-b41e58.netlify.app/landingPage",
        "description":
          "Full-stack pet management app with secure login, checkout, and order tracking."
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
