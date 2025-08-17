"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/lib/menu";
import MobMenu from "./mobile-menu";

export function Header() {
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />

        <NavItems items={navItems} />

        <div className="flex items-center gap-4">
          <NavbarButton
            className="bg-[linear-gradient(113deg,#ac1b1b_0%,#721212_50%,#460a0a_100%)] text-white"
            variant="primary"
          >
            Book a call
          </NavbarButton>
        </div>
      </NavBody>
      <MobMenu items={navItems} />
    </Navbar>
  );
}
