import Image from "next/image";
import React from "react";
import person1 from "../../public/images/person1.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Darrell Steward",
      handle: "@darrels",
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashtag: "#another",
      img: person1,
    },
    {
      name: "Leslie Alexander",
      handle: "@leslie",
      text: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
      hashtag: "#postcrafts",
      img: person1,
    },
    {
      name: "Jenny Wilson",
      handle: "@jennywilson",
      text: "This is a top-quality product. No need to think twice before making it live on the web.",
      hashtag: "#make_it_fast",
      img: person1,
    },
    {
      name: "Kristin Watson",
      handle: "@kristinwatson2",
      text: "Finally, I've found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
      hashtag: "#postcrafts",
      img: person1,
    },
    {
      name: "Guy Hawkins",
      handle: "@jennywilson",
      text: "This is a top-quality product. No need to think twice before making it live on the web.",
      hashtag: "#make_it_fast",
      img: person1,
    },
    {
      name: "Marvin McKinney",
      handle: "@jennywilson",
      text: "With Postcrafts, it's quicker with the customer, and I'm all for efficiency.",
      hashtag: "#dev #tools",
      img: person1,
    },
    {
      name: "Annette Black",
      handle: "@jennywilson",
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashtag: "#another",
      img: person1,
    },
    {
      name: "Floyd Miles",
      handle: "@jennywilson",
      text: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashtag: "#postcrafts",
      img: person1,
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-white text-[26px] lg:text-[36px] md:text[36px] font-semibold leading-tight mb-10">
        What our customers say
      </h1>
      <p className="text-[12px] lg:text-[14px] md:text-[14px]">
      Read why thousands of marketers, writers, and <br /> entrepreneurs love us so much.
      </p>

      <div className="py-12 px-6 mb-16 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4"
            >
              <div className="flex items-start gap-3">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
                <div className="ml-auto">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.56c-.89.39-1.85.65-2.85.77a4.92 4.92 0 002.17-2.71 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48 14 14 0 01-10.15-5.15 4.92 4.92 0 001.53 6.57c-.8-.03-1.55-.25-2.2-.62v.06a4.92 4.92 0 003.95 4.83c-.74.2-1.53.23-2.34.09a4.92 4.92 0 004.6 3.42 9.87 9.87 0 01-6.1 2.1c-.4 0-.79-.02-1.18-.07a14 14 0 007.56 2.22c9.07 0 14.02-7.52 14.02-14.03 0-.21-.01-.42-.02-.62A9.98 9.98 0 0024 4.56z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
              <p className="text-sm text-blue-500 font-medium">
                {testimonial.hashtag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
