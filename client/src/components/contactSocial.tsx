import {motion} from "framer-motion" 
import { socialLinks } from "../data/data"
import { ArrowRight } from "lucide-react"
 const SocialLinks = ({accent}:{
    accent:{ 
        primary:string,
        glow:string
    }
 }) =>{ 

    return (
   <>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: accent.primary }}>
            Connect With Me
          </h3>

          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="flex items-center gap-4 p-5 rounded-xl border backdrop-blur-xl group relative overflow-hidden"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              {/* Hover gradient effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${accent.glow}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className="p-3 rounded-lg relative z-10"
                style={{
                  backgroundColor: `${accent.primary}20`,
                }}
              >
                <link.icon
                  className="w-6 h-6 group-hover:scale-110 transition-transform"
                  style={{ color: accent.primary }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <p className="text-sm text-gray-400 font-medium">{link.label}</p>
                <p className="text-white font-semibold">{link.value}</p>
              </div>

              {/* Arrow */}
              <ArrowRight
                className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all relative z-10"
              />
            </motion.a>
          ))}

          {/* Quick Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 p-6 rounded-xl border backdrop-blur-xl"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderColor: accent.primary,
              boxShadow: `0 0 30px ${accent.glow}`,
            }}
          >
            <h4 className="font-bold mb-3" style={{ color: accent.primary }}>
              Quick Response
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              I typically respond within 24 hours. For urgent matters, feel free to reach out via Telegram for the fastest response.
            </p>
          </motion.div>
        </motion.div>
        </>
        )}

export default SocialLinks
