import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-12 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="TMAX Logo"
            width={240}
            height={122}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Welcome to TMAX
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto">
            Your lifestyle and informational companion for optimized living
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/terms" className="w-full sm:w-auto">
            <Button
              size="xl"
              className="w-full sm:w-auto bg-[#FF6B35] hover:bg-[#FF8555] text-white font-semibold shadow-lg shadow-[#FF6B35]/20 transition-all duration-300 hover:scale-105"
            >
              <FileText className="mr-2 h-5 w-5" />
              Terms of Service
            </Button>
          </Link>
          
          <Link href="/privacy" className="w-full sm:w-auto">
            <Button
              size="xl"
              variant="outline"
              className="w-full sm:w-auto border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <Shield className="mr-2 h-5 w-5" />
              Privacy Policy
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="pt-16 text-gray-500 text-sm">
          <p>© 2025 TMAX. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}

