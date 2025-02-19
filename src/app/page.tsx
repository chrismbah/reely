// app/page.tsx
import { redirect } from "next/navigation";
import { reelsData } from "@/data/reels";

export default function HomePage() {
  // Redirect to the first reel (adjust as needed)
  if (reelsData.length > 0) {
    redirect(`/reels/${reelsData[0].id}`);
  }

  // Fallback if no reels are available
  return <p>No reels available</p>;
}
