import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const frameCount = 300;

    const currentFrame = (index: number) =>
      `/frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

    // Size canvas to the window, not the image
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load first frame immediately so something is visible on page load
    const firstImg = new Image();
    firstImg.src = currentFrame(0);
    firstImg.onload = () => {
      context.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
    };

    if (prefersReducedMotion) {
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (firstImg.complete) {
          context.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    // Preload all frames into an array for fast access
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images[i] = img;
    }

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScrollTop <= 0) return;

      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * frameCount))
      );

      const img = images[frameIndex];
      if (!img) return;

      requestAnimationFrame(() => {
        if (img.complete) {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        } else {
          img.onload = () => context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
    />
  );
}
