"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export function Nav() {
  const [active, setActive] = useState(null);
  const { getCartItemsCount } = useCart();

  return (
    <div className={cn("fixed top-0 inset-x-0 w-full mx-auto z-50")}>
      <Menu setActive={setActive}>
        <Image src={'/logo.png'} height={80} width={80} alt="logo" />
        <div className="relative border border-transparent shadow-input flex justify-center gap-[2rem] items-center h-[4rem]">
          <motion.p>
            Home
          </motion.p>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Categories">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before." />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project" />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes." />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Best Seller">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before." />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project" />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes." />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>
        <div className="flex items-center gap-10">
          {/* Enhanced Cart Section */}
          <Link 
            href="/cart" 
            className="flex items-center gap-2 cursor-pointer relative group p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="relative">
              <AiOutlineShoppingCart className="text-xl group-hover:scale-110 transition-transform" /> 
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-semibold shadow-lg animate-pulse">
                  {getCartItemsCount() > 99 ? '99+' : getCartItemsCount()}
                </span>
              )}
            </div>
            <h1 className="font-medium">Cart</h1>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Account">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">My Account</HoveredLink>
              <HoveredLink href="/web-dev">My Orders</HoveredLink>
              <HoveredLink href="/web-dev">Settings</HoveredLink>
              <HoveredLink href="/web-dev">Favourites</HoveredLink>
              <HoveredLink href="/web-dev">Delivery Addresses</HoveredLink>
              <HoveredLink href="/web-dev">Billing Data</HoveredLink>
              <HoveredLink href="/web-dev">Sign Out</HoveredLink>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}