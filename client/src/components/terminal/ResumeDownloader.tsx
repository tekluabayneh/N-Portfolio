function ResumeButton({accent}:{accent:{ 
    primary:string,
    glow:string
}}) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../public/resume.pdf";
    link.download = "Teklu_Resume.pdf"; 
    link.click();
  };


  return <button
        className="px-6  cursor-pointer py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: accent.primary,
          color: "#000",
          boxShadow: `0 0 20px ${accent.glow}`,
        }} onClick={handleDownload}>Download Resume</button>;
}

export default ResumeButton;
