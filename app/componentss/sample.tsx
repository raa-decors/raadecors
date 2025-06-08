import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <main className="bg-[#700038] text-white min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white text-[#700038]">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="RAA Decors Logo" width={50} height={50} />
          <h1 className="text-2xl font-anurati">RAA Decors</h1>
        </div>
      </header>

      {/* Our Service */}
      <section className="p-6">
        <h2 className="text-3xl mb-4 text-white">Our Service</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {Array.from({ length: 10 }).map((_, idx) => (
            <div key={`service-${idx}`}>
              <Image
                src={`/service${idx + 1}.jpg`}
                alt={`Service ${idx + 1}`}
                width={800}
                height={400}
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Our Works */}
      <section className="p-6">
        <h2 className="text-3xl mb-4 text-white">Our Works</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {Array.from({ length: 10 }).map((_, idx) => (
            <div key={`work-${idx}`}>
              <Image
                src={`/work${idx + 1}.jpg`}
                alt={`Work ${idx + 1}`}
                width={800}
                height={400}
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Contact */}
      <section className="p-6">
        <h2 className="text-3xl mb-4 text-white">Contact</h2>
        <form className="bg-white text-[#700038] p-4 rounded-xl max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border border-[#700038] rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 border border-[#700038] rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 mb-4 border border-[#700038] rounded"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-[#700038] text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
