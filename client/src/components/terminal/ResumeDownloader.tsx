const ResumeButton = ({ accent }: { accent: { primary: string; glow: string } }) => {
  const downloadFiles = () => {
    const files = [
      { path: "/resume.pdf", name: "Teklu_Resume.pdf" },
      { path: "/resume_alt.pdf", name: "Teklu_Resume_Alt.pdf" },
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file.path;
      link.download = file.name;
      document.body.appendChild(link); 
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <button
      className="px-6 cursor-pointer py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: accent.primary,
        color: "#000",
        boxShadow: `0 0 20px ${accent.glow}`,
      }}
      onClick={downloadFiles} 
    >
      Download Resume
    </button>
  );
}

export default ResumeButton
