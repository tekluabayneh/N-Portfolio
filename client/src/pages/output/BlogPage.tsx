import { motion } from "framer-motion";
import { blogPosts, containerVariants } from "../../data/data";

const BlogPage = ({ accent }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-4"
  >
    <p style={{ color: accent.primary }} className="font-bold mb-4">
      $ ls blog/
    </p>
    <div className="space-y-3">
      {blogPosts.map((post, i) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-4 rounded-lg border backdrop-blur-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderColor: accent.primary,
          }}
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold" style={{ color: accent.primary }}>
              {post.title}
            </h3>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <p className="text-sm text-gray-400 mb-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, j) => (
              <span
                key={j}
                className="text-xs px-2 py-1 rounded bg-white/5"
                style={{ color: accent.primary }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default BlogPage;
