import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Music, Heart, Loader } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SpotifyTrack {
  id: string;
  name: string;
  artists: string;
  albumImageUrl: string;
  albumName: string;
  previewUrl: string | null;
  externalUrl: string;
}

interface CurrentlyPlaying {
  isPlaying: boolean;
  track: SpotifyTrack | null;
}

const API_BASE_URL = "https://morning-king-66d8.issacboi.workers.dev/spotify"; 

const Spotify = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [currentlyPlaying, setCurrentlyPlaying] = useState<CurrentlyPlaying | null>(null);
  const [likedTracks, setLikedTracks] = useState<SpotifyTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [currentlyPlayingResponse, likedTracksResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/currently-playing`),
          fetch(`${API_BASE_URL}/recently-liked`)
        ]);

        if (!currentlyPlayingResponse.ok || !likedTracksResponse.ok) {
          throw new Error("Failed to fetch Spotify data");
        }

        const currentlyPlayingData = await currentlyPlayingResponse.json();
        const likedTracksData = await likedTracksResponse.json();

        setCurrentlyPlaying({
          isPlaying: currentlyPlayingData.is_playing,
          track: currentlyPlayingData.item
            ? {
                id: currentlyPlayingData.item.id,
                name: currentlyPlayingData.item.name,
                artists: currentlyPlayingData.item.artists.map(artist => artist.name).join(", "),
                albumImageUrl: currentlyPlayingData.item.album.images[0].url,
                albumName: currentlyPlayingData.item.album.name,
                previewUrl: currentlyPlayingData.item.preview_url,
                externalUrl: currentlyPlayingData.item.external_urls.spotify,
              }
            : null,
        });

        setLikedTracks(
          likedTracksData.map((track: any) => ({
            id: track.track.id,
            name: track.track.name,
            artists: track.track.artists.map(artist => artist.name).join(", "),
            albumImageUrl: track.track.album.images[0].url,
            albumName: track.track.album.name,
            previewUrl: track.track.preview_url,
            externalUrl: track.track.external_urls.spotify,
          }))
        );
      } catch (err) {
        console.error("Error fetching Spotify data:", err);
        setError("Failed to load Spotify data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  return (
    <section id="spotify" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative">
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-green-50/50 dark:bg-green-900/10 rounded-br-full -z-10"></div>

      <div className="section-container" ref={sectionRef}>
        <motion.span 
          className="section-subtitle block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Music
        </motion.span>

        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Spotify
        </motion.h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="w-8 h-8 animate-spin text-green-500" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="mt-12 space-y-8">
            {/* Currently Playing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 justify-center sm:justify-start">
                <Music className="text-green-500" /> Currently Playing
              </h3>

              {currentlyPlaying?.isPlaying && currentlyPlaying.track ? (
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-48 h-48 flex-shrink-0">
                      <img 
                        src={currentlyPlaying.track.albumImageUrl} 
                        alt={currentlyPlaying.track.albumName} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-col justify-center p-6">
                      <h4 className="text-xl font-semibold mb-2">{currentlyPlaying.track.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">{currentlyPlaying.track.artists}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Album: {currentlyPlaying.track.albumName}</p>
                      <a 
                        href={currentlyPlaying.track.externalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4 text-green-500 hover:text-green-600 transition-colors text-sm inline-flex items-center gap-1"
                      >
                        Open in Spotify
                      </a>
                    </CardContent>
                  </div>
                </Card>
              ) : (
                <Card className="overflow-hidden shadow-md dark:bg-gray-800 p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400">Not currently playing any music.</p>
                </Card>
              )}
            </motion.div>

            {/* Recently Liked */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 justify-center sm:justify-start">
                <Heart className="text-red-500" /> Recently Liked
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedTracks.map(track => (
                  <Card key={track.id} className="overflow-hidden hover:shadow-md transition-shadow dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold">{track.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{track.artists}</p>
                      <a 
                        href={track.externalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 transition-colors text-xs inline-flex items-center gap-1"
                      >
                        Open in Spotify
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Spotify;
