import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Get the ad script URL from the query parameter
  const searchParams = request.nextUrl.searchParams;
  const adScript = searchParams.get("ad");

  if (!adScript) {
    return NextResponse.json(
      { error: "No ad script specified" },
      { status: 400 }
    );
  }

  try {
    // In a real implementation, you would fetch the actual ad script
    // For this example, we'll return a mock script
    const mockAdScript = `
      console.log('Ad script loaded via proxy');
      
      // Create a placeholder ad
      function createAd(selector) {
        const container = document.querySelector(selector);
        if (container) {
          const adElement = document.createElement('div');
          adElement.style.padding = '20px';
          adElement.style.backgroundColor = '#f0f0f0';
          adElement.style.borderRadius = '4px';
          adElement.style.textAlign = 'center';
          adElement.innerHTML = '<p style="margin: 0; font-weight: bold;">Advertisement</p><p style="margin: 5px 0 0;">This is a proxy-loaded advertisement</p>';
          container.appendChild(adElement);
        }
      }
      
      // Initialize ads when the DOM is ready
      document.addEventListener('DOMContentLoaded', function() {
        createAd('.ad-container');
      });
    `;

    // Return the script with the appropriate content type
    return new NextResponse(mockAdScript, {
      headers: {
        "Content-Type": "application/javascript",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Error serving ad script:", error);
    return NextResponse.json(
      { error: "Failed to load ad script" },
      { status: 500 }
    );
  }
}
