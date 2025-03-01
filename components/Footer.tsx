import Link from "next/link";
import { SiGithub, SiLinkedin, SiX, SiYoutube } from "react-icons/si";
// import { Link } from "wouter";

const footerLinks = {
  Products: [
    { name: "AI", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Fluid Compute", href: "#" },
    { name: "Next.js", href: "#" },
    { name: "Observability", href: "#" },
    { name: "Previews", href: "#" },
    { name: "Rendering", href: "#" },
    { name: "Security", href: "#" },
    { name: "Turbo", href: "#" },
    { name: "v0.12", href: "#" },
  ],
  Resources: [
    { name: "Community L2", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Help", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Solution Partners", href: "#" },
    { name: "Templates", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Changelog", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Legal", href: "#" },
  ],
  Social: [
    { name: "GitHub", href: "#", icon: SiGithub },
    { name: "LinkedIn", href: "#", icon: SiLinkedin },
    { name: "Twitter", href: "#", icon: SiX },
    { name: "YouTube", href: "#", icon: SiYoutube },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-foreground">
                {section}
              </h3>
              <ul className="mt-6 space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      {/* <a className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"> */}
                      {/* {"icon" in linkLink && linkLink.icon && (
                          <linkLink.icon className="w-4 h-4" />
                        )} */}
                      {link.name}
                      {/* </a> */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">All systems normal</p>
        </div>
      </div>
    </footer>
  );
}
