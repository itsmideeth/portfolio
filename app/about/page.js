import AboutMe from "../components/aboutme";
import VisitedMap from "../components/visitedmap";
import SpotifyPlayer from "../components/spotifyplayer";


export default function AboutPage() {
  
  return (
    <main className="min-h-screen transition-colors duration-300">
      <AboutMe />

      <section className="grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 mx-auto md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-lg font-semibold dark:text-[#ededed]">
            Major cities I have visited
          </h2>
          <VisitedMap />
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold dark:text-[#ededed]">Have a listen</h2>
          <SpotifyPlayer />
        </div>
      </section>
    </main>
  );
}
