"use client";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
  SignedIn,
  useAuth,
} from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Lightbulb, Menu, X } from "lucide-react";

export function Navbar() {
  const { userId } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Lightbulb className="w-8 h-8 text-yellow-200" />
              <span className="text-xl sm:text-2xl font-bold text-white">
                i-Craft Ai
              </span>
            </Link>
          </div>
          <button
            className="sm:hidden text-white focus:outline"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen?<X className="w-6 h-6"/>:<Menu className="w-6 h-6"/>}
          </button>
          
        </div>
      </nav>
    </header>
  );
}
