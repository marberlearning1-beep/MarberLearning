"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Editable section copy
const SECTION_TITLE = "The Impact We're Making";

// Editable testimonials
const TESTIMONIALS = [
  {
    quote:
      "My daughter's confidence in math has completely transformed. The Marber tutor truly cared about her progress and made every session engaging.",
    author: "Sarah M.",
    role: "Parent of 8th grader",
  },
  {
    quote:
      "I went from struggling to acing my exams. The one-on-one attention made all the difference.",
    author: "Daniel R.",
    role: "10th Grade Student",
  },
  {
    quote:
      "We've tried other tutoring services, but Marber stands out. The personalized approach and warm environment have been a game-changer for our son.",
    author: "Jennifer & Mark T.",
    role: "Parents",
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [slideDir, setSlideDir] = useState(0);

  const goTo = useCallback((index: number, dir: number) => {
    setSlideDir(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % TESTIMONIALS.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, -1);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark">
            {SECTION_TITLE}
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-14 z-10 p-2.5 rounded-full bg-white shadow-md hover:shadow-lg text-primary hover:bg-bg-soft transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-14 z-10 p-2.5 rounded-full bg-white shadow-md hover:shadow-lg text-primary hover:bg-bg-soft transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          {/* Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: slideDir * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: slideDir * -48 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="bg-bg-soft rounded-2xl px-8 py-10 md:px-14 md:py-14 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-7" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-accent-mint fill-accent-mint"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-heading text-xl md:text-2xl italic text-text-dark leading-relaxed">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </blockquote>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2.5 mt-8" role="tablist" aria-label="Testimonial navigation">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  i === current
                    ? "bg-primary w-7"
                    : "bg-primary/25 w-2.5 hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
