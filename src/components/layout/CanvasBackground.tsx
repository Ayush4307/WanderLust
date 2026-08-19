import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const frameCount = 300;
    const currentFrameUrl = (index: number) =>
      `/frames/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

    let activeFrameIndex = 0;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawCover = (img: HTMLImageElement) => {
      if (!context || !canvas || !img || !img.complete || img.naturalWidth === 0) {
        return;
      }
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const hRatio = canvasWidth / img.naturalWidth;
      const vRatio = canvasHeight / img.naturalHeight;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (canvasWidth - img.naturalWidth * ratio) / 2;
      const centerShiftY = (canvasHeight - img.naturalHeight * ratio) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(
        img,
        0,
        0,
        img.naturalWidth,
        img.naturalHeight,
        centerShiftX,
        centerShiftY,
        img.naturalWidth * ratio,
        img.naturalHeight * ratio
      );
    };

    const images: HTMLImageElement[] = [];

    const renderIndex = (index: number) => {
      activeFrameIndex = index;
      const img = images[index];
      if (img && img.complete && img.naturalWidth > 0) {
        drawCover(img);
      } else if (img) {
        img.onload = () => {
          if (activeFrameIndex === index) {
            drawCover(img);
          }
        };
      }
    };

    const getCurrentFrameIndex = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScrollTop <= 0) return 0;

      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScrollTop));
      return Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * frameCount))
      );
    };

    // Preload all frames
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrameUrl(i);
      img.onload = () => {
        // If this image is the one that should be visible right now, draw it immediately
        if (activeFrameIndex === i) {
          drawCover(img);
        }
      };
      images[i] = img;
    }

    // Set initial size and render
    resizeCanvas();
    const initialIndex = getCurrentFrameIndex();
    renderIndex(initialIndex);

    // If first image is already in memory cache, draw immediately
    if (images[initialIndex] && images[initialIndex].complete) {
      drawCover(images[initialIndex]);
    }

    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        const index = getCurrentFrameIndex();
        renderIndex(index);
      });
    };

    const handleResize = () => {
      resizeCanvas();
      const index = getCurrentFrameIndex();
      renderIndex(index);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        resizeCanvas();
        const index = getCurrentFrameIndex();
        renderIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("focus", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("focus", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
