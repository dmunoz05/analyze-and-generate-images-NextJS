import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { optionsParticles } from "@ai/components/Cover/particleOptions";

export default function Cover() {
  const particlesInit = useCallback(async (Engine) => {
    await loadFull(Engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div id="cover">
      <Particles
        className="absolute -z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles}
      />
    </div>
  );
}
