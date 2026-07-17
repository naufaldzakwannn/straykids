"use client";

import HeroGlow from "./HeroGlow";
import HeroParticles from "./HeroParticles";

export default function HeroBackground() {
  return (
    <>
      {/* Animated Gradient */}
      <div className="hero-gradient absolute inset-0" />

      {/* Grid */}
      <div className="hero-grid absolute inset-0" />

      {/* Glow */}
      <HeroGlow />

      {/* Particles */}
      <HeroParticles />

      {/* Noise */}
      <div className="hero-noise absolute inset-0" />
    </>
  );
}