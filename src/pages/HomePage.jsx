import { HeroSection } from "../components/HeroSection";

export function HomePage({ hero }) {
  return (
    <main>
      <HeroSection hero={hero} />
    </main>
  );
}
