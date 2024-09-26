import styles from "./SplineLoader.module.css";
import { useRef, useState, useEffect, startTransition } from "react";
import { PreSold } from "./PreSold";
import { EarlyConstruction } from "./EarlyConstruction";
import { MidConstruction } from "./MidConstruction";
import { MoveInReady } from "./MoveInReady";
import Manifest from "../components/Manifest/Manifest";
import HeroVideo from "../media/EH-GlowLogo-Hero.mp4";
import HeroImage from "../media/EH-GlowLogo-Hero.png";

export default function SplineLoader() {
  const [currentContent, setCurrentContent] = useState<string>("Pre");
  const [videoEnded, setVideoEnded] = useState(false); // Track if video has ended
  const [imageLoaded, setImageLoaded] = useState(false); // Track if the image is preloaded
  const contentRef = useRef<HTMLDivElement | null>(null);

  function handleClick(contentName: string) {
    startTransition(() => {
      setCurrentContent(contentName);
    });

    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  // Preload image before the video ends
  useEffect(() => {
    const img = new Image();
    img.src = HeroImage; // Use the imported HeroImage
    img.onload = () => setImageLoaded(true); // Set when image is fully loaded
  }, []);

  // Handle video end event
  function handleVideoEnd() {
    setVideoEnded(true);
  }

  const renderContent = () => {
    switch (currentContent) {
      case "Pre":
      default:
        return <PreSold />;
      case "Early":
        return <EarlyConstruction />;
      case "Mid":
        return <MidConstruction />;
      case "Ready":
        return <MoveInReady />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.splineContainer}>
        {videoEnded ? (
          <img
            src={HeroImage}
            alt="Static background"
            className={styles.staticImage}
          />
        ) : (
          <video
            src={HeroVideo}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className={styles.video}
          />
        )}

        <div className={styles.manifestContainer}>
          <Manifest />
        </div>

        <div className={styles.customControls}>
          <button onClick={() => handleClick("Pre")}>Pre-Sold</button>
          <button onClick={() => handleClick("Early")}>
            Early Construction
          </button>
          <button onClick={() => handleClick("Mid")}>Mid Construction</button>
          <button onClick={() => handleClick("Ready")}>Move-In Ready</button>
        </div>
      </div>

      <div className={styles.contentSection} ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
}
