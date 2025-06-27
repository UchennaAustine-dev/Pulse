// "use client";

// import { useEffect } from "react";

// interface AdBannerProps {
//   placementId: string;
//   id: string;
//   minWidth: number;
//   minHeight: number;
//   className?: string;
// }

// export function AdBanner({
//   placementId,
//   id,
//   minWidth,
//   minHeight,
//   className = "",
// }: AdBannerProps) {
//   useEffect(() => {
//     // Initialize ad script here if needed
//     // This is where you'd load your RevBid script
//   }, []);

//   return (
//     <div className={`ad-container ${className}`}>
//       <div className="text-xs text-muted-foreground mb-1 text-center">
//         Advertisement
//       </div>
//       <div
//         data-placement-id={placementId}
//         id={id}
//         style={{
//           minWidth: `${minWidth}px`,
//           minHeight: `${minHeight}px`,
//           textAlign: "center",
//         }}
//         className="bg-muted/20 border border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center"
//       >
//         <span className="text-muted-foreground text-sm">Ad Space</span>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";

interface AdBannerProps {
  placementId: string;
  id: string;
  minWidth: number;
  minHeight: number;
  className?: string;
}

export function AdBanner({
  placementId,
  id,
  minWidth,
  minHeight,
  className = "",
}: AdBannerProps) {
  useEffect(() => {
    // Check if the script is already present
    if (!document.getElementById("revbid-script")) {
      const script = document.createElement("script");
      script.id = "revbid-script";
      script.type = "text/javascript";
      script.src = "//prebid.revbid.net/4792/revbid.js";
      script.async = true;
      document.body.appendChild(script);

      // Optional: If the ad library requires a callback after loading
      script.onload = () => {
        // If RevBid exposes a global function to refresh or render ads, call it here
        // Example: window.revbid?.refreshAds?.();
      };
    } else {
      // Script already loaded, you can trigger ad refresh here if needed
      // Example: window.revbid?.refreshAds?.();
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <div className="text-xs text-muted-foreground mb-1 text-center">
        Advertisement
      </div>
      <div
        data-placement-id={placementId}
        id={id}
        style={{
          minWidth: `${minWidth}px`,
          minHeight: `${minHeight}px`,
          textAlign: "center",
        }}
        className="bg-muted/20 border border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center"
      >
        <span className="text-muted-foreground text-sm">Ad Space</span>
      </div>
    </div>
  );
}
