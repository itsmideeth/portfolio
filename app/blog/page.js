"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Static blog list
const blogs = [
  {
    id: 1,
    title: "Building Generalizable AI Agents Through Reinforcement Learning and Neuroscience",
    date: "September 2025",
    tags: ["AI Research", "Robotics", "Ethics"],
    link: "https://ayomide.hashnode.dev/active-recall-study",
  },
  {
    id: 2,
    title:
      "Advancing AI Alignment and Real-World Applications of GPT-5 Across Industries",
    date: "October 2025",
    tags: ["AI", "Research"],
    link: "https://openai.com/research/",
  },
  {
    id: 3,
    title:
      "Flask Development Made Easy: A Comprehensive Guide to Test-Driven Development",
    date: "January 2024",
    tags: ["Python", "Flask", "TDD"],
    link: "https://ayomide.hashnode.dev/flask-tdd-guide",
  },
  {
    id: 4,
    title: "Optimizing Database Interactions in Python: SQLAlchemy Best Practices",
    date: "March 2023",
    tags: ["Python", "SQL"],
    link: "https://ayomide.hashnode.dev/sqlalchemy-best-practices",
  },
  {
    id: 5,
    title: "Beyond Firewalls: The Rise of Zero Trust Architecture",
    date: "January 2025",
    tags: ["Security", "Threat Intelligence"],
    link: "https://www.csoonline.com/article/3677125/what-is-zero-trust-architecture.html",
  },
  {
    id: 6,
    title: "How Kubernetes and AI Power the Future of Cloud Computing",
    date: "January 2024",
    tags: ["Infrastructure", "Cloud Platforms"],
    link: "https://cloud.google.com/blog/products/containers-kubernetes/how-ai-and-kubernetes-are-shaping-the-future-of-cloud",
  },
   {
    id: 7,
    title: "Driving Enterprise Agility with Open Source, Kubernetes, and Edge Solutions",
    date: "August 2025",
    tags: ["Containers", "Open Source"],
    link: "https://www.redhat.com/en/blog",
  },
];

export default function BlogPostsSection() {
  const [dailyBlogs, setDailyBlogs] = useState([]);

  // Function to get a pseudo-random subset that changes daily
  useEffect(() => {
    const dateSeed = new Date().toDateString(); // Changes each day
    const random = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++)
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      return Math.abs(hash);
    };
    const seed = random(dateSeed);
    const shuffled = [...blogs].sort((a, b) =>
      random(a.title + seed) % 2 ? 1 : -1
    );
    setDailyBlogs(shuffled.slice(0, 7));
  }, [setDailyBlogs]);

  return (
    <section
      id="blog"
      className="py-8 transition-colors duration-300 bg-white dark:bg-[#121212]"
    >
      <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Blog Posts
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            My thoughts, tutorials, and insights
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {dailyBlogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between p-6 transition-all duration-300 bg-white border border-gray-200 dark:bg-[#1E1E1E] rounded-2xl dark:border-0 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs text-gray-700 bg-gray-100 rounded-full dark:bg-black/50 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                  {blog.date}
                </p>
                <h3 className="font-semibold leading-snug text-gray-900 text-md dark:text-gray-100">
                  {blog.title}
                </h3>
              </div>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-end items-center gap-1 mt-6 text-sm font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-black dark:hover:text-blue-400"
              >
                Read <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
