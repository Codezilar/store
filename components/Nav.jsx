"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useSession, signOut } from "next-auth/react";

export function Nav() {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState(null);
  const { getCartItemsCount } = useCart();
  const { data: session, status } = useSession();

  const toggleMobileSubmenu = (item) => {
    setMobileActive(mobileActive === item ? null : item);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <div className={cn("fixed top-0 inset-x-0 w-full mx-auto z-50")}>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          {/* <Image src={'/logo.png'} height={80} width={80} alt="logo" /> */}
          <h1 className="logo">Euphoria</h1>
          <div className="relative border border-transparent shadow-input flex justify-center gap-[2rem] items-center h-[4rem]">
            <Link href={'/'} className="nav_items">
              <h1>Home</h1>
            </Link>
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
            <MenuItem setActive={setActive} active={active} item="Help">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/about">About Us</HoveredLink>
                <HoveredLink href="/contact">Contact Us</HoveredLink>
                <HoveredLink href="/support">Support</HoveredLink>
                <HoveredLink href="/faq">FAQ</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <div className="flex items-center gap-2">
            <Link 
              href="/cart" 
              className="flex items-center gap-1 cursor-pointer relative group p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
            
            {/* Conditional Account Menu based on authentication */}
            {session ? (
              // User is logged in - show account menu with sign out
              <MenuItem setActive={setActive} active={active} item="Account">
                <div className="flex flex-col space-y-4 text-sm">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <p className="font-medium text-gray-900">Welcome,</p>
                    <p className="font-medium text-gray-900">{session.user.name}</p>
                    <p className="text-xs text-gray-500">{session.user.email}</p>
                    {session.user.role === 'admin' && (
                      <Link href={'/dashboard'}>
                        <span className="inline-block mt-1 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                          Admin
                        </span>
                      </Link>
                    )}
                  </div>
                  <HoveredLink href="/account">My Account</HoveredLink>
                  <HoveredLink href="/orders">My Orders</HoveredLink>
                  <HoveredLink href="/settings">Settings</HoveredLink>
                  <HoveredLink href="/favourites">Favourites</HoveredLink>
                  <HoveredLink href="/addresses">Delivery Addresses</HoveredLink>
                  <HoveredLink href="/billing">Billing Data</HoveredLink>
                  <button
                    onClick={handleSignOut}
                    className="text-left text-red-600 hover:text-red-700 transition-colors px-3 py-2 hover:bg-red-50 rounded-md"
                  >
                    Sign Out
                  </button>
                </div>
              </MenuItem>
            ) : (
              // User is not logged in - show sign in/sign up options
              <div className="flex items-center gap-3">
                <Link 
                  href="/auth/signin" 
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </Menu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <nav className="nav">
          <div className="flex justify-between items-center w-full">
            <Image src={'/logo.png'} height={60} width={60} alt="logo" />
            
            <div className="flex items-center gap-4">
              <Link 
                href="/cart" 
                className="flex items-center gap-1 cursor-pointer relative p-2 rounded-lg transition-colors"
              >
                <div className="relative">
                  <AiOutlineShoppingCart className="text-xl" /> 
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-semibold">
                      {getCartItemsCount() > 99 ? '99+' : getCartItemsCount()}
                    </span>
                  )}
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <AiOutlineClose className="text-xl" /> : <AiOutlineMenu className="text-xl" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Slide-in Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Slide-in Menu */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl z-50 overflow-y-auto"
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <Image src={'/logo.png'} height={50} width={50} alt="logo" />
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <AiOutlineClose className="text-lg" />
                    </button>
                  </div>
                  
                  {/* User info if logged in */}
                  {session && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">Welcome, {session.user.name}</p>
                      <p className="text-sm text-gray-500 truncate">{session.user.email}</p>
                      {session.user.role === 'admin' && (
                        <span className="inline-block mt-1 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                          Admin
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  {/* Home */}
                  <Link 
                    href="/" 
                    className="block py-3 px-4 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Categories */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleMobileSubmenu("Categories")}
                      className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                    >
                      <span>Categories</span>
                      <motion.span
                        animate={{ rotate: mobileActive === "Categories" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </motion.span>
                    </button>
                    
                    <AnimatePresence>
                      {mobileActive === "Categories" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-3"
                        >
                          <div className="grid grid-cols-1 gap-3 p-2">
                            <a href="https://algochurn.com" className="flex space-x-2 p-3 hover:bg-gray-50 rounded-lg">
                              <img
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                width={80}
                                height={40}
                                alt="Algochurn"
                                className="shrink-0 rounded-md shadow-lg" />
                              <div>
                                <h4 className="text-sm font-bold mb-1">Algochurn</h4>
                                <p className="text-neutral-700 text-xs max-w-[8rem]">
                                  Prepare for tech interviews like never before.
                                </p>
                              </div>
                            </a>
                            <a href="https://tailwindmasterkit.com" className="flex space-x-2 p-3 hover:bg-gray-50 rounded-lg">
                              <img
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                width={80}
                                height={40}
                                alt="Tailwind Master Kit"
                                className="shrink-0 rounded-md shadow-lg" />
                              <div>
                                <h4 className="text-sm font-bold mb-1">Tailwind Master Kit</h4>
                                <p className="text-neutral-700 text-xs max-w-[8rem]">
                                  Production ready Tailwind css components.
                                </p>
                              </div>
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Best Seller */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleMobileSubmenu("Best Seller")}
                      className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                    >
                      <span>Best Seller</span>
                      <motion.span
                        animate={{ rotate: mobileActive === "Best Seller" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </motion.span>
                    </button>
                    
                    <AnimatePresence>
                      {mobileActive === "Best Seller" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-3"
                        >
                          <div className="grid grid-cols-1 gap-3 p-2">
                            <a href="https://algochurn.com" className="flex space-x-2 p-3 hover:bg-gray-50 rounded-lg">
                              <img
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                width={80}
                                height={40}
                                alt="Algochurn"
                                className="shrink-0 rounded-md shadow-lg" />
                              <div>
                                <h4 className="text-sm font-bold mb-1">Algochurn</h4>
                                <p className="text-neutral-700 text-xs max-w-[8rem]">
                                  Prepare for tech interviews like never before.
                                </p>
                              </div>
                            </a>
                            <a href="https://tailwindmasterkit.com" className="flex space-x-2 p-3 hover:bg-gray-50 rounded-lg">
                              <img
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                width={80}
                                height={40}
                                alt="Tailwind Master Kit"
                                className="shrink-0 rounded-md shadow-lg" />
                              <div>
                                <h4 className="text-sm font-bold mb-1">Tailwind Master Kit</h4>
                                <p className="text-neutral-700 text-xs max-w-[8rem]">
                                  Production ready Tailwind css components.
                                </p>
                              </div>
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Help */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleMobileSubmenu("Help")}
                      className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                    >
                      <span>Help</span>
                      <motion.span
                        animate={{ rotate: mobileActive === "Help" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </motion.span>
                    </button>
                    
                    <AnimatePresence>
                      {mobileActive === "Help" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-2"
                        >
                          <Link href="/about" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            About Us
                          </Link>
                          <Link href="/contact" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Contact Us
                          </Link>
                          <Link href="/support" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Support
                          </Link>
                          <Link href="/faq" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            FAQ
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Authentication Section */}
                  {session ? (
                    // User is logged in - show account menu with sign out
                    <div className="space-y-2 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => toggleMobileSubmenu("Account")}
                        className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                      >
                        <span>Account</span>
                        <motion.span
                          animate={{ rotate: mobileActive === "Account" ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ▼
                        </motion.span>
                      </button>
                      
                      <AnimatePresence>
                        {mobileActive === "Account" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2"
                          >
                            <Link href="/account" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                              My Account
                            </Link>
                            <Link href="/orders" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                              My Orders
                            </Link>
                            <Link href="/settings" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                              Settings
                            </Link>
                            <Link href="/favourites" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                              Favourites
                            </Link>
                            <Link href="/addresses" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                              Delivery Addresses
                            </Link>
                            <Link href="/billing" className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                              Billing Data
                            </Link>
                            <button
                              onClick={() => {
                                handleSignOut();
                                setMobileMenuOpen(false);
                              }}
                              className="block w-full text-left py-2 px-4 hover:bg-red-50 rounded-lg text-red-600 transition-colors"
                            >
                              Sign Out
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-gray-200 space-y-3">
                      <Link 
                        href="/signin" 
                        className="block w-full text-center py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link 
                        href="/signup" 
                        className="block w-full text-center py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}