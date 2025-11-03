import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import { containerVariantsForm } from "../../data/data";
import SocialLinks from "../../components/contactSocial";
import axios from "axios";
import toast from "react-hot-toast";
const ContactPage = ({ accent }:{accent:{ 
  primary:string, 
  glow:string
}}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    console.log(formData);
try {
  const response = await axios.post("http://localhost:8000/SendEmail",formData)
  if ( response.status == 200){ 
  toast.success(response.data.message);
  }
} catch (err:any) {
  toast.error(err.response.data.message);
}
  };

 

  return (
    <motion.div
      variants={containerVariantsForm}
      initial="hidden"
      animate="visible"
      className="space-y-8 max-w-6xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6" style={{ color: accent.primary }} />
          <p style={{ color: accent.primary }} className="font-bold text-lg">
            $ cat contact.txt
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-gray-400 text-lg">
          I'm always open to interesting conversations and collaboration opportunities.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl border backdrop-blur-xl relative overflow-hidden"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderColor: accent.primary,
            boxShadow: `0 0 40px ${accent.glow}`,
          }}
        >
          {/* Animated gradient background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${accent.primary}, transparent 70%)`,
            }}
          />

          <h3 className="text-2xl font-bold mb-6 relative z-10" style={{ color: accent.primary }}>
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === "name" || formData.name
                    ? "top-2 text-xs"
                    : "top-5 text-base"
                }`}
                style={{
                  color: focusedField === "name" ? accent.primary : "#9ca3af"
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 pt-7 pb-3 bg-white/5 border rounded-xl outline-none transition-all duration-300 text-white"
                style={{
                  borderColor: focusedField === "name" ? accent.primary : "rgba(255,255,255,0.1)",
                  boxShadow: focusedField === "name" ? `0 0 20px ${accent.glow}` : "none"
                }}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === "email" || formData.email
                    ? "top-2 text-xs"
                    : "top-5 text-base"
                }`}
                style={{
                  color: focusedField === "email" ? accent.primary : "#9ca3af"
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 pt-7 pb-3 bg-white/5 border rounded-xl outline-none transition-all duration-300 text-white"
                style={{
                  borderColor: focusedField === "email" ? accent.primary : "rgba(255,255,255,0.1)",
                  boxShadow: focusedField === "email" ? `0 0 20px ${accent.glow}` : "none"
                }}
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === "message" || formData.message
                    ? "top-2 text-xs"
                    : "top-5 text-base"
                }`}
                style={{
                  color: focusedField === "message" ? accent.primary : "#9ca3af"
                }}
              >
                Your Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows={6}
                className="w-full px-4 pt-7 pb-3 bg-white/5 border rounded-xl outline-none transition-all duration-300 text-white resize-none"
                style={{
                  borderColor: focusedField === "message" ? accent.primary : "rgba(255,255,255,0.1)",
                  boxShadow: focusedField === "message" ? `0 0 20px ${accent.glow}` : "none"
                }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 cursor-pointer rounded-xl font-semibold text-white relative overflow-hidden group"
              style={{
                backgroundColor: accent.primary,
                boxShadow: `0 10px 30px ${accent.glow}`
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              />
            </motion.button>
          </form>
        </motion.div>
        <SocialLinks accent={accent}/>
        </div>
        </motion.div>

      
  );
};

export default ContactPage;