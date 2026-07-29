import { Link } from "@tanstack/react-router";
import { useState } from "react";
import MitrivLogo1 from "@/assets/mitriv2.png";

export default function Footer(){
    return(
        <footer id="contact" className="bg-card border-t border-border pt-24 pb-12 px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 mb-24" data-reveal>
          <div>
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-none">
              Let&apos;s Talk.
            </h2>
            <a
              href="mailto:hello@verschluss.com"
              className="text-xl md:text-2xl font-bold underline decoration-primary decoration-2 underline-offset-8 hover:text-primary transition-colors"
            >
              hello@mitriv.in
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
             <div className="flex flex-col gap-4">
              <a href="">Privacy Policy</a>
              <a href="">Term And Conditions</a>
              
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/mitrivventures?igsh=Ym13MGpram95djhz" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="https://www.facebook.com/share/18ihWFLxZ8/" className="hover:text-foreground transition-colors">FaceBook</a>
              <a href="#" className="hover:text-foreground transition-colors">Vimeo</a>
            </div>
            <div className="flex flex-col gap-4">
              <span>
                Address: Shop no. 2, MS Building no. 2, RC Marg Chembur Colony, Opp. Shree Sanatan Dharam School, Mumbai, India, 400074
                <br />
                <span>Mitriv Ventures</span>
              </span>
              <span>
               Helping you find the perfect home and smart property investments with trust and expertise.
              </span>
              <span>+91 7045566614</span>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-end border-t border-border pt-12">
          <span className="font-display text-3xl md:text-4xl uppercase tracking-tighter">
            <img src={MitrivLogo1} width="150px" height="150px"></img>
          </span>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 Mitriv Ventures Group. All rights reserved.
          </span>
        </div>
      </footer>
    )
}