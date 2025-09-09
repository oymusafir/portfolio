import { MessageCircle, Wrench, Rocket, Briefcase } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Muhammad Adnan | Full-Stack Developer & WhatsApp Marketing Expert",
  description:
    "Learn more about Muhammad Adnan, a full-stack developer, bulk WhatsApp marketing expert, and automation builder. Experienced in web apps, mobile apps, desktop software, WhatsApp chatbots, CRM systems, and custom automation tools.",
  keywords: [
    "Muhammad Adnan",
    "about Muhammad Adnan",
    "full stack developer",
    "WhatsApp marketing expert",
    "WhatsApp cloud API",
    "WhatsApp automation",
    "bulk WhatsApp messaging",
    "chatbot developer",
    "CRM developer",
    "automation builder",
    "software engineer",
  ],
  openGraph: {
    title: "About Muhammad Adnan | Full-Stack Developer & WhatsApp Marketing Expert",
    description:
      "Portfolio of Muhammad Adnan — full-stack developer and WhatsApp marketing expert. Discover his skills, expertise, achievements, and years of experience in building scalable automation solutions.",
    url: "https://muhammadadnan.dev/about",
    siteName: "Muhammad Adnan Portfolio",
    images: [
      {
        url: "https://muhammadadnan.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Muhammad Adnan",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muhammad Adnan | Full-Stack Developer & WhatsApp Marketing Expert",
    description:
      "Discover Muhammad Adnan’s expertise in full-stack development, bulk WhatsApp marketing, automation, and custom software solutions.",
    images: ["https://muhammadadnan.dev/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12 pt-20">
      <div className="max-w-6xl w-full space-y-10">

        {/* Heading */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold">Muhammad Adnan</span>, a
            passionate <span className="font-medium">full-stack developer</span>,{" "}
            <span className="font-medium">WhatsApp marketing expert</span>, software engineer,
            and automation builder. I create{" "}
            <span className="font-medium">web apps</span>,{" "}
            <span className="font-medium">desktop apps</span>, and{" "}
            <span className="font-medium">mobile applications</span> with clean code,
            scalability, and great user experiences in mind.
          </p>
        </div>

        {/* WhatsApp Expertise */}
        <div className="p-6 border rounded-2xl shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
            <MessageCircle className="w-5 h-5 text-green-600" />
            WhatsApp Marketing & Automation
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            I specialize in building advanced <strong>WhatsApp chatbots</strong>,
            automation tools, and complete <strong>CRM systems</strong>. My solutions help clients:
          </p>
          <ul className="mt-3 space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
            <li>Send personalized bulk messages legally & effectively</li>
            <li>Automate lead capture and follow-up with AI-powered bots</li>
            <li>Integrate WhatsApp with CRM, e-commerce, and support</li>
            <li>Boost engagement & sales without manual effort</li>
          </ul>
        </div>

        {/* Highlights */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 border rounded-2xl shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <Wrench className="w-5 h-5 text-blue-600" />
              Skills & Expertise
            </h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
              <li>Full-Stack Development</li>
              <li>WhatsApp Automation</li>
              <li>Chatbot & CRM Development</li>
              <li>Custom Automation Tools</li>
              <li>API Integrations</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <Rocket className="w-5 h-5 text-purple-600" />
              Products & Achievements
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              I’ve built multiple software solutions that actively generate
              revenue for clients. My work focuses on delivering real-world
              results with long-term value.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="p-6 border rounded-2xl shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
            <Briefcase className="w-5 h-5 text-amber-600" />
            Experience
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            With years of hands-on experience, I’ve worked on diverse projects
            from idea to deployment — always aiming for robust, user-friendly,
            and scalable applications.
          </p>
        </div>
      </div>
    </main>
  );
}
