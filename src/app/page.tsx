import { redirect } from "next/navigation";
import { reelsData } from "@/data/reels";

export default function HomePage() {
  // Redirect to reels section
  if (reelsData.length > 0) {
    redirect(`/reels`);
  }

  // Fallback if no reels are available
  return <p>No reels available</p>;
}
