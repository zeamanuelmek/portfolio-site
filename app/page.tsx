import { Hero, FeaturedProjects, CurrentlySection } from '@/components/home';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <CurrentlySection />
    </div>
  );
}
