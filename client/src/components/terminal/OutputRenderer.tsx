import { blogPosts } from "../../data/data";
import Neofetch from "../../pages/output/neofetch";
import Help from "../../pages/output/help";
import About from "../../pages/output/about";
import Projects from "../../pages/output/Projects";
import Skills from "../../pages/output/skills";
import ResumePage from "../../pages/output/ResumePage";
import ContactPage from "../../pages/output/ContactPage";
import ErrorPage from "../../pages/output/ErrorPage";
import BlogPage from "../../pages/output/BlogPage";
import ExperiencePage from "../../pages/output/ExperiencePage";
import type { OutPutPropesType } from "../../types/dataType";

export default function OutputRenderer({
  output,
  accent,
  fontSize,
}: OutPutPropesType) {
  if (!output) return null;
  switch (output.type) {
    case "neofetch":
      return <Neofetch accent={accent} fontSize={fontSize} />;
    case "help":
      return <Help accent={accent} />;
    case "about":
      return <About accent={accent} />;

    case "projects":
      return <Projects accent={accent} />;

    case "skills":
      return <Skills accent={accent} />;
    case "experience":
      return <ExperiencePage accent={accent} />;
    case "blog":
      return <BlogPage accent={accent} blogPosts={blogPosts} />;
    case "resume":
      return <ResumePage accent={accent} />;
    case "contact":
      return <ContactPage accent={accent} />;
    case "error":
      return <ErrorPage output={output} />;
    default:
      return null;
  }
}
