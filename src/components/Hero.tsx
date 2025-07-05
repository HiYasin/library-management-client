"use client"
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import bannerLottie from "@/assets/books_lottie.json"

function Hero() {
  return (
    <section className="w-full flex items-center px-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
        <div className="relative">
          <Lottie className="w-[70%] md:w-[50%] mx-auto lg:w-full" animationData={bannerLottie} loop={true} />
          {/* <Loading /> */}
        </div>

        <div className="text-primary">
          <h1 className="text-center lg:text-left text-4xl md:text-5xl font-bold mb-6">
            Discover, Borrow and Learn
            <br />
            — All in One Place
          </h1>
          <p className="text-gray-500 mb-6 text-center lg:text-left">
            Welcome to your smart library solution. Easily search, reserve, and manage books with just a few clicks. Whether you're a student, teacher, or avid reader — our system makes library access simple, fast, and efficient.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="rounded-full">Get Started Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
