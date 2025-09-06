import React from "react";
import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ParticleBackground />
            <div className="z-10 max-w-[1400px] mx-auto relative">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
}
