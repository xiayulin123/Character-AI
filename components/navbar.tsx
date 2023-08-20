"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import {  Menu, Sparkle } from "lucide-react";
import Link from 'next/link'
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/model-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";

const font = Poppins({
    weight: '600',
    subsets:["latin"]
})
export const Navbar = () => {
    return(
        <div className="fixed w-full z-50 h-16 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary ">
            <div className="felx items-center">
                <MobileSidebar />
                <Link  href="/">
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary",
                    font.className
                    )}>
                        character.ai
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="premium" size="sm">
                    Upgrade
                    <Sparkle className="h-4 w-4 fill-white text-white ml-2"/>
                </Button>
                <ModeToggle />
                <UserButton />
            </div>
        </div>
    )
}