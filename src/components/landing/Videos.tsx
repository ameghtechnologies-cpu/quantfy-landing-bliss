import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Getting Started with Quantfy",
    description: "Learn how to navigate the Universe and find your first stocks.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Understanding DROPify Score",
    description: "How we combine quality, growth, valuation & shareholding into one score.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "MomentoScope Deep Dive",
    description: "Track momentum trends and spot the right entry points.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const Videos = () => {
  return (
    <section id="videos" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            See Quantfy in action
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Watch how investors use Quantfy to screen and analyse Indian stocks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-brand-sky/30 transition-colors"
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play size={18} className="text-primary-foreground ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-sans font-semibold text-foreground text-sm mb-1">{video.title}</h3>
                <p className="text-xs text-muted-foreground">{video.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
