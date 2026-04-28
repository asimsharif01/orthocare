"use client";

import { useMemo, useState } from "react";

const testimonials = [
  {
    quote: "The care I received was exceptional. I'm back to doing the things I love pain-free!",
    name: "Sarah J.",
    treatment: "Knee Replacement",
    avatar: "SJ",
  },
  {
    quote: "Professional, caring, and truly life-changing. Highly recommend the team!",
    name: "Michael R.",
    treatment: "Spine Surgery",
    avatar: "MR",
  },
  {
    quote: "From consultation to recovery, the entire experience was outstanding.",
    name: "David L.",
    treatment: "Shoulder Surgery",
    avatar: "DL",
  },
  {
    quote: "The team explained every step and made me feel confident from day one.",
    name: "Anita P.",
    treatment: "ACL Reconstruction",
    avatar: "AP",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCards = 3;

  const pages = useMemo(() => {
    const chunks = [];

    for (let i = 0; i < testimonials.length; i += visibleCards) {
      chunks.push(testimonials.slice(i, i + visibleCards));
    }

    return chunks;
  }, []);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < pages.length - 1;

  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 py-8 lg:px-2">
      <p className="text-sm font-bold uppercase tracking-wide text-indigo-500">+ Patient Stories</p>
      <div className="mt-2 mb-6 flex items-center justify-between gap-4">
        <h2 className="text-5xl font-extrabold text-slate-900">What Our Patients Say</h2>
        <button className="hidden text-lg font-semibold text-indigo-500 md:block">View All Testimonials →</button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="grid min-w-full gap-5 lg:grid-cols-3">
              {page.map((item) => (
                <article key={item.name} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                  <p className="text-5xl font-black text-indigo-200">“</p>
                  <p className="mt-2 text-2xl leading-relaxed text-slate-600">{item.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                      {item.avatar}
                    </span>
                    <div>
                      <p className="text-2xl font-bold text-slate-800">{item.name}</p>
                      <p className="text-lg text-slate-500">{item.treatment}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          className="rounded-full border border-indigo-200 px-3 py-1 text-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() => canGoPrev && setActiveIndex((current) => current - 1)}
          disabled={!canGoPrev}
          aria-label="Previous testimonials"
        >
          ←
        </button>

        {pages.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full ${
              activeIndex === index ? "bg-indigo-500" : "bg-indigo-200"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial page ${index + 1}`}
          />
        ))}

        <button
          className="rounded-full border border-indigo-200 px-3 py-1 text-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() => canGoNext && setActiveIndex((current) => current + 1)}
          disabled={!canGoNext}
          aria-label="Next testimonials"
        >
          →
        </button>
      </div>
    </section>
  );
}
