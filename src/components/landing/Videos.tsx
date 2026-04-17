import { motion } from "framer-motion";

const video = {
  title: "QuanTfy App Demo",
  description: "See the full walkthrough of how QuanTfy helps you screen and analyse Indian stocks.",
  youtubeId: "oGNcnV_3Pko",
};

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
            See QuanTfy in action
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Watch how investors use QuanTfy to screen and analyse Indian stocks.
          </p>
        </motion.div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-card to-brand-sky/5">
              <h3 className="font-sans font-semibold text-foreground mb-1">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Videos;
