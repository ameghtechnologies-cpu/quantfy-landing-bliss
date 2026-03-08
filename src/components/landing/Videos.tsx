import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    title: "Quantfy App Demo",
    description: "See the full walkthrough of how Quantfy helps you screen and analyse Indian stocks.",
    youtubeId: "oGNcnV_3Pko",
  },
  {
    title: "Understanding DROPify Score",
    description: "How we combine quality, growth, valuation & shareholding into one composite score.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "MomentoScope Deep Dive",
    description: "Track momentum trends and spot the right entry and exit points.",
    youtubeId: "dQw4w9WgXcQ",
  },
];

const Videos = () => {
  return (
    <section id="videos" className="py-16 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-sky/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-amber/5 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-sky mb-4 block">Watch</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            See Quantfy in action
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Watch how investors use Quantfy to screen and analyse Indian stocks.
          </p>
        </motion.div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
                title={videos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-card to-brand-sky/5">
              <h3 className="font-sans font-semibold text-foreground mb-1">{videos[0].title}</h3>
              <p className="text-sm text-muted-foreground">{videos[0].description}</p>
            </div>
          </div>
        </motion.div>

        {/* Other videos */}
        <div className="grid sm:grid-cols-2 gap-6">
          {videos.slice(1).map((video, i) => (
            <motion.a
              key={video.title}
              href={`https://youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-brand-sky/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/20 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-brand-sky/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  >
                    <Play size={20} className="text-primary-foreground ml-0.5" />
                  </motion.div>
                </div>
              </div>
              <div className="p-5 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-sans font-semibold text-foreground text-sm mb-1">{video.title}</h3>
                  <p className="text-xs text-muted-foreground">{video.description}</p>
                </div>
                <ExternalLink size={14} className="text-muted-foreground flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
