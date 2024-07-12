import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { Sparkles } from "lucide-react";
import TabbedNavigation from "./components/TabbedNavigation";
import MainBlog from "./components/MainBlog";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";

export default function Home() {
  const tabs = ["popular", "new", "old", "related", "pc"];
  return (
    <h1 className="px-2">
      <Navbar />
      <div className="hero  mt-20">
        <p className="flex gap-3 justify-center">
          Blog <Sparkles className="w-[20px]" />
        </p>
        <h1 className="text-center font-bold text-4xl md:text-6xl mt-4">
          News and insights
        </h1>
        <p className="text-center mt-12 max-w-[80%] md:max-w-[50%] mx-auto text-gray-600">
          In my latest blog post, I delve into the transformative power of
          mindfulness in everyday life. Discover practical tips on incorporating
          mindfulness into your routine and its profound impact on stress
          reduction and overall well-being.
        </p>
        <div className="tabs mt-8">
          <TabbedNavigation tabs={tabs} defaultTab="popular" />
        </div>
        <div className="topBlog mt-12 mb-16">
          <MainBlog />
        </div>
        <div className="blogList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 containerx mb-16">
          <BlogCard image={"/1.webp"} />
          <BlogCard image={"/2.webp"} />
          <BlogCard image={"/3.jpeg"} />
          <BlogCard image={"/4.webp"} />
          <BlogCard image={"/5.webp"} />
          <BlogCard image={"/1.webp"} />
        </div>
        <div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </h1>
  );
}
