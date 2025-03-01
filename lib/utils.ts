import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const products: {
  title: string;
  href: string;
  description: string;
  image?: string;
}[] = [
  {
    title: "Previews",
    href: "#",
    description: "Helping teams ship 6x faster",
    image: "assets/svgexport-2.svg",
  },
  {
    title: "AI",
    href: "#",
    description: "Powering breakthroughs.",
    image: "assets/svgexport-3.svg",
  },
  {
    title: "Fluid compute",
    href: "#",
    description: "Servers, in serverless form",
    image: "assets/svgexport-4.svg",
  },
  {
    title: "Rendering",
    href: "#",
    description: "Fast, scalable and reliable",
    image: "assets/svgexport-5.svg",
  },
  {
    title: "Observability",
    href: "#",
    description: "Trace every step",
    image: "assets/svgexport-6.svg",
  },
  {
    title: "Security",
    href: "#",
    description: "Scale without compromising",
    image: "assets/svgexport-7.svg",
  },
  {
    title: "Nextjs",
    href: "#",
    description: "The native Next.js platform",
    image: "assets/svgexport-8.svg",
  },
  {
    title: "Turborepo",
    href: "#",
    description: "Speed with entreprise scale",
    image: "assets/svgexport-11.svg",
  },
  {
    title: "AI SDK",
    href: "#",
    description: "The AI toolkit for typescript",
    image: "assets/svgexport-12.svg",
  },
];

export const resources: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const solutions: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
