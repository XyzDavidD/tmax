"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Star,
  Check,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Smartphone,
  Search,
  BarChart,
  Droplets,
  Clock,
  Zap,
  TrendingUp,
  Moon,
  Quote,
  ArrowRight,
  Download,
  ChevronLeft,
  MoreHorizontal,
  Camera,
  ImageIcon,
  Flame,
  Utensils,
  Activity,
  Gift
} from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isInputAnimating, setIsInputAnimating] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2026-01-15T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNavbarClick = () => {
    emailInputRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
    
    setIsInputAnimating(true);
    emailInputRef.current?.focus();
    
    setTimeout(() => {
      setIsInputAnimating(false);
    }, 1000);
  };

  const handleSubmit = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setIsModalOpen(true);
      setEmail("");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden selection:bg-orange-500/30">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-2">
                <Gift className="w-10 h-10 text-orange-500" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">You're on the list!</h3>
                <p className="text-gray-400">
                  Thanks for joining. You've secured your <span className="text-orange-500 font-bold">free month</span> of TMAX Premium when we launch.
                </p>
              </div>

              <div className="w-full p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-sm text-gray-400 mb-2">We'll notify you at:</p>
                <p className="text-white font-medium break-all">{email || "your-email@example.com"}</p>
              </div>

              <Button 
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-lg"
              >
                Awesome!
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Image 
                src="/tmax_icon.png" 
                alt="TMAX Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
              <span className="font-bold text-xl tracking-tight">TMAX</span>
            </div>
            <Button 
              onClick={handleNavbarClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
            >
              <Gift className="w-4 h-4 mr-2" />
              Get 1 month free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text & Form */}
            <div className="text-left">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 mb-8">
                <Clock className="w-5 h-5 text-orange-500" />
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
                    <span className="text-xs text-gray-400">d</span>
                  </div>
                  <span className="text-gray-600">:</span>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
                    <span className="text-xs text-gray-400">h</span>
                  </div>
                  <span className="text-gray-600">:</span>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
                    <span className="text-xs text-gray-400">m</span>
                  </div>
                  <span className="text-gray-600">:</span>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
                    <span className="text-xs text-gray-400">s</span>
                  </div>
                </div>
                <span className="text-sm text-gray-300">until launch</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Grow your testosterone
                </span> naturally
              </h1>

              <p className="text-lg text-gray-400 max-w-xl mb-10">
                The first app designed to help you naturally boost your testosterone by 
                identifying endocrine disruptors in everyday products and building 
                testosterone-optimizing habits into your lifestyle.
              </p>

              <div className="flex flex-col items-start gap-4 mb-20">
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <input 
                    ref={emailInputRef}
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    disabled={isSubmitting}
                    className={`flex h-14 w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50 text-white transition-all hover:bg-white/10 ${
                      isInputAnimating ? 'animate-[pulse_0.5s_ease-in-out_2] ring-2 ring-orange-500 scale-105' : ''
                    }`}
                  />
                  <Button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    size="lg" 
                    className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold shadow-lg shadow-orange-500/20 disabled:opacity-50"
                  >
                    <Gift className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Subscribing..." : "Get 1 month free"}
                  </Button>
                </div>
                {error && (
                  <p className="text-sm text-red-500">
                    {error}
                  </p>
                )}
                <p className="text-sm text-gray-400">
                  Get a <span className="text-orange-500 font-semibold">free month</span> when we launch!
                </p>
              </div>
            </div>

            {/* Right Column: Phones */}
            <div className="relative h-[700px] w-full hidden lg:block">
              {/* Phone 1: Scanner */}
              <div className="absolute left-0 top-20 z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative">
                  <Image 
                    src="/phone_1.png" 
                    alt="Scanner Interface" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Phone 2: Results */}
              <div className="absolute right-0 top-0 z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative">
                  <Image 
                    src="/phone_3.png" 
                    alt="Results Interface" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-4 gap-10 text-left border-t border-white/10 pt-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/tmax_icon.png" 
                  alt="TMAX Logo" 
                  width={24} 
                  height={24} 
                  className="rounded"
                />
                <span className="font-bold">TMAX</span>
              </div>
              <p className="text-xs text-gray-500">Coming soon to iOS and Android</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Use</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

            <div className="flex justify-end items-end gap-4">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div className="text-center mt-10 text-xs text-gray-600">
            © 2026 TMAX. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

