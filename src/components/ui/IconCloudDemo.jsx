
import CoolMode from "./CoolMode";
import { IconCloud } from "./IconCloud";

const slugs = [
  "python",
  "java",
  "csharp",
  "javascript",
  "typescript",
  "dart",
  "html5",
  "css3",
  "django",
  "react",
  "nodedotjs",
  "express",
  "flutter",
  "tailwindcss",
  "bootstrap",
  "mysql",
  "mongodb",
  "oracle",
  "figma",
  "firebase",
  "git",
  "vercel",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "amazonaws",
  "postman",
  "figma",
];


export function IconCloudDemo() {
  return (
    <div className="relative flex items-center justify-center max-w-full px-6 pb-8 overflow-hidden">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
