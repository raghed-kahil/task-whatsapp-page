"use client";

import DrawerIcon from "@/icons/DrawerIcon";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-24 flex items-center gap-4 p-2 px-4">
      <Drawer open={open} onOpenChange={setOpen} direction="left">
        <DrawerTrigger asChild className="md:hidden">
          <Button variant="ghost" size={"icon"}>
            <DrawerIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left min-w-64">
            <DrawerTitle className="mb-4">Logo</DrawerTitle>
            <DrawerDescription>
              <div className="flex flex-col gap-1">
                <Link href={'/about'} className={clsx(buttonVariants({variant: 'ghost'}) ,"!justify-start")}>About Us</Link>
                <Button variant={'ghost'} className="justify-start">Blog</Button>
                <Button variant={'ghost'} className="justify-start">Contact Us</Button>
              </div>
            </DrawerDescription>
          </DrawerHeader>

        </DrawerContent>
      </Drawer>
      <Link href={"/"} className="text-center px-2">
        <span className="font-bold text-lg">Logo</span>
        <br />
        Logo
      </Link>
      <div className="hidden md:flex justify-center gap-2 flex-1">
        <Link
          href={"/about"}
          className={buttonVariants({ variant: "outline" })}
        >
          About Us
        </Link>
        <Button variant={"outline"}>Why Us</Button>
        <Button variant={"outline"}>Blog</Button>
        <Button variant={"outline"}>Cantact Us</Button>
      </div>
      <Button size="lg" className="text-lg ms-auto">
        Free Trial
      </Button>
    </nav>
  );
}
