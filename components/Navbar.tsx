"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn, resources, solutions, products } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <section className="large_screen w-screen px-3 sticky top-0 z-50 bg-black">
        <header className="flex justify-center items-center  w-full">
          <div className={`flex justify-between main_nav-width py-8`}>
            <div className="flex justify-between items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90.6923076923077"
                height="18"
                viewBox="0 0 262 52"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M59.8 52L29.9 0L0 52H59.8ZM89.9574 49.6328L114.945 2.36365H104.137L86.8999 36.6921L69.6628 2.36365H58.8545L83.8423 49.6328H89.9574ZM260.248 2.36365V49.6329H251.3V2.36365H260.248ZM210.441 31.99C210.441 28.3062 211.21 25.0661 212.747 22.2699C214.285 19.4737 216.429 17.321 219.179 15.812C221.928 14.3029 225.144 13.5484 228.826 13.5484C232.088 13.5484 235.024 14.2585 237.634 15.6788C240.244 17.0991 242.317 19.2074 243.855 22.0036C245.393 24.7998 246.185 28.2174 246.232 32.2564V34.3202H219.878C220.064 37.2496 220.926 39.5576 222.464 41.2442C224.049 42.8864 226.169 43.7075 228.826 43.7075C230.503 43.7075 232.041 43.2637 233.439 42.376C234.838 41.4883 235.886 40.2899 236.585 38.7808L245.743 39.4466C244.624 42.7754 242.527 45.4385 239.451 47.4358C236.375 49.4331 232.834 50.4317 228.826 50.4317C225.144 50.4317 221.928 49.6772 219.179 48.1681C216.429 46.6591 214.285 44.5064 212.747 41.7102C211.21 38.914 210.441 35.6739 210.441 31.99ZM237.005 28.6612C236.678 25.7762 235.77 23.668 234.278 22.3365C232.787 20.9606 230.969 20.2726 228.826 20.2726C226.356 20.2726 224.352 21.0049 222.814 22.4696C221.276 23.9343 220.321 25.9982 219.948 28.6612H237.005ZM195.345 22.3365C196.836 23.5348 197.768 25.1993 198.141 27.3297L207.369 26.8637C207.043 24.1562 206.087 21.8039 204.503 19.8066C202.918 17.8093 200.868 16.278 198.351 15.2128C195.881 14.1032 193.155 13.5484 190.172 13.5484C186.49 13.5484 183.275 14.3029 180.525 15.812C177.775 17.321 175.632 19.4737 174.094 22.2699C172.556 25.0661 171.787 28.3062 171.787 31.99C171.787 35.6739 172.556 38.914 174.094 41.7102C175.632 44.5064 177.775 46.6591 180.525 48.1681C183.275 49.6772 186.49 50.4317 190.172 50.4317C193.248 50.4317 196.044 49.8769 198.561 48.7673C201.077 47.6133 203.128 45.9933 204.712 43.9072C206.297 41.8212 207.252 39.38 207.578 36.5838L198.281 36.1844C197.955 38.5367 197.046 40.3565 195.555 41.6436C194.063 42.8864 192.269 43.5078 190.172 43.5078C187.283 43.5078 185.046 42.5091 183.461 40.5118C181.877 38.5145 181.084 35.6739 181.084 31.99C181.084 28.3062 181.877 25.4656 183.461 23.4683C185.046 21.471 187.283 20.4723 190.172 20.4723C192.176 20.4723 193.9 21.0937 195.345 22.3365ZM149.953 14.3457H158.28L158.52 21.137C159.111 19.2146 159.933 17.7218 160.986 16.6585C162.512 15.1166 164.64 14.3457 167.369 14.3457H170.769V21.6146H167.3C165.357 21.6146 163.761 21.8789 162.512 22.4075C161.309 22.9362 160.384 23.7732 159.737 24.9186C159.135 26.064 158.835 27.5178 158.835 29.2799V49.6328H149.953V14.3457ZM111.546 22.2699C110.008 25.0661 109.239 28.3062 109.239 31.99C109.239 35.6739 110.008 38.914 111.546 41.7102C113.084 44.5064 115.228 46.6591 117.977 48.1681C120.727 49.6772 123.942 50.4317 127.624 50.4317C131.632 50.4317 135.174 49.4331 138.25 47.4358C141.325 45.4385 143.423 42.7754 144.541 39.4466L135.384 38.7808C134.684 40.2899 133.636 41.4883 132.238 42.376C130.84 43.2637 129.302 43.7075 127.624 43.7075C124.968 43.7075 122.847 42.8864 121.263 41.2442C119.725 39.5576 118.863 37.2496 118.676 34.3202H145.03V32.2564C144.984 28.2174 144.192 24.7998 142.654 22.0036C141.116 19.2074 139.042 17.0991 136.432 15.6788C133.822 14.2585 130.886 13.5484 127.624 13.5484C123.942 13.5484 120.727 14.3029 117.977 15.812C115.228 17.321 113.084 19.4737 111.546 22.2699ZM133.077 22.3365C134.568 23.668 135.477 25.7762 135.803 28.6612H118.746C119.119 25.9982 120.074 23.9343 121.612 22.4696C123.15 21.0049 125.154 20.2726 127.624 20.2726C129.768 20.2726 131.585 20.9606 133.077 22.3365Z"
                  fill="white"
                  style={{ fill: "white;fill-opacity:1;" }}
                />
              </svg>
              <NavigationMenu
                className="main_nav space-x-8 text-xl"
                aria-label="main"
              >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black">
                        {products.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            description={component.description}
                            image={component.image}
                            className="flex gap-1"
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black">
                        {solutions.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            description={component.description}
                            href={component.href}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  bg-black">
                        {resources.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            description={component.description}
                            href={component.href}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Entreprise
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Docs
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="main_nav">
              <div className="flex gap-4">
                <Button>Login</Button>
                <Button>Contact</Button>
                <Button className="bg-slate-50 text-black">Sign up</Button>
              </div>
            </div>

            <Menu
              id="hamburger-button"
              className={`relative flex flex-col h-5 w-8 cursor-pointer hamburger  ${
                isMobileMenuOpen ? "open" : ""
              } `}
              onClick={toggleMobileMenu}
            >
              {/* <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div> */}
            </Menu>
          </div>

          <div
            id="mobile-menu"
            className={`top-20 justify-center absolute ${
              isMobileMenuOpen ? "flex" : "hidden"
            } w-full origin-top animate-open-menu left-0 flex-col bg-black text-white text-xl`}
          >
            <nav
              className="flex min-h-screen flex-col items-center py-8 w-screen gap-8 px-4"
              aria-label="mobile"
            >
              <div className="flex flex-col gap-4  w-full">
                <Button className="bg-white text-black">Sign up</Button>
                <Button className="">Login</Button>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Products</AccordionTrigger>
                  {products.map((component) => (
                    <AccordionContent
                      key={component.title}
                      className="flex gap-2"
                    >
                      <span>
                        {" "}
                        <Image
                          src={component.image || ""}
                          width={20}
                          height={20}
                          alt={component.title}
                          className="rounded-sm"
                        />
                      </span>
                      <span>{component.title}</span>
                    </AccordionContent>
                  ))}
                  {/* <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent> */}
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Solutions</AccordionTrigger>
                  {solutions.map((component) => (
                    <AccordionContent
                      key={component.title}
                      className="flex gap-2"
                    >
                      {/* <span>
                        {" "}
                        <Image
                          src={component.image || ""}
                          width={20}
                          height={20}
                          alt={component.title}
                          className="rounded-sm"
                        />
                      </span> */}
                      <span>{component.title}</span>
                    </AccordionContent>
                  ))}
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Resources</AccordionTrigger>
                  {resources.map((component) => (
                    <AccordionContent
                      key={component.title}
                      className="flex gap-2"
                    >
                      {/* <span>
                        {" "}
                        <Image
                          src={component.image || ""}
                          width={20}
                          height={20}
                          alt={component.title}
                          className="rounded-sm"
                        />
                      </span> */}
                      <span>{component.title}</span>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>

              <ul className="w-full flex flex-col gap-4">
                <li>
                  <Link href={"#"}>Docs</Link>
                </li>
                <li>
                  <Link href={"#"}>Pricing</Link>
                </li>
                <li>
                  <Link href={"#"}>Contact</Link>
                </li>
                <li>
                  <Link href={"#"}>Theme</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </section>
      {/* End of nav bar */}
    </>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  description: string;
  image?: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, image, description, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2">
              {image && (
                <Image
                  src={image}
                  width={20}
                  height={20}
                  alt={title}
                  className="rounded-sm"
                />
              )}
              <div className="flex flex-col gap-1 text-sm font-medium leading-none">
                <span>{title}</span>
                <span>{description}</span>
              </div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
