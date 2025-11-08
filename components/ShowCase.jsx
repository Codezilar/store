"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        New Collections
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/6.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/7.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/8.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/9.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/10.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/11.jpg",
    content: <DummyContent />,
  },
];
