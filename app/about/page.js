import AboutMe from "../components/aboutme";
import VisitedMap from "../components/visitedmap";
import SpotifyPlayer from "../components/spotifyplayer";


export default function AboutPage() {
  return (
    <main className=" min-h-screen bg-white">
      <AboutMe />

      <section className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-3 text-lg">
            Major cities I have visited
          </h2>
          <VisitedMap />
        </div>

        <div>
          <h2 className="font-semibold mb-3 text-lg">Have a listen</h2>
          <SpotifyPlayer />
        </div>
      </section>
    </main>
  );
}
