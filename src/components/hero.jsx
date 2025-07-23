import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [muted, setMuted] = React.useState(true);

  return (
    <section className="w-full flex justify-center items-start pt-0">
      <div className="relative w-full h-[70vh] max-h-[70dvh] lg:h-screen lg:max-h-screen">
        <video
          src="/hero1 (1) (1).mp4"
          autoPlay
          loop
          muted={muted}
          playsInline
          className="w-full h-full object-cover"
        />

        <Button
          onClick={() => setMuted((m) => !m)}
          size="icon"
          variant="secondary"
          className="absolute bottom-6 right-6 bg-black/60 text-white hover:bg-black/80 rounded-full"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? (
            <span role="img" aria-label="Muted">🔇</span>
          ) : (
            <span role="img" aria-label="Unmuted">🔊</span>
          )}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
