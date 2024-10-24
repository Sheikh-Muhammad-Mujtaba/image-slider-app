import DarkModeToggle from "@/components/Darkmode-button";
import ImageSlider from "@/components/image-slider";

export default function Home() {
  return (
    <div>
      <div className="absolute top-9  right-6">
      <DarkModeToggle />
      </div>
      <ImageSlider />
    </div>
  );
}