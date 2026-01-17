import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-6 h-6">
                 <Image
                    src="/assets/logo.png"
                    alt="Hero.IO Logo"
                    fill
                    className="object-contain"
                  />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                HERO.IO
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Hero IO consolidates your daily tasks, goals, and communication into a single powerful platform. 
              Boost productivity and simplify your life today.
            </p>
            <div className="flex gap-4">
               {/* Social Icons placeholders - could be links */}
               <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
               </Link>
               <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
               </Link>
               <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
               </Link>
               <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
               </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Mission</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold mb-4 text-foreground">Services</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
               <li><Link href="#" className="hover:text-primary transition-colors">Products</Link></li>
               <li><Link href="#" className="hover:text-primary transition-colors">Customer Stories</Link></li>
               <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
               <li><Link href="#" className="hover:text-primary transition-colors">Download</Link></li>
             </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
               <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
               <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
               <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
             </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ripa Sarkar. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
             <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
             <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
