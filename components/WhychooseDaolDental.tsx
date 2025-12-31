'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: 'Excellence',
    heading: 'Commitment to Quality Care',
    description:
      'We are dedicated to providing exceptional dental services with the latest technology and techniques.',
    img: '/images/new_main/why_minish_pic01.jpg',
  },
  {
    title: 'Experience',
    heading: 'Trusted Dental Professionals',
    description:
      'Our team brings years of experience and expertise to ensure the best outcomes for every patient.',
    img: '/images/new_main/why_minish_pic03.jpg',
  },
];

export default function WhyChooseDaolDental() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#222176] mb-3 sm:mb-4">
            Why so many{' '}
            <span className="font-black">choose Daol Dental</span>
          </h2>
          <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
            <p className="max-w-2xl mx-auto text-gray-700 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
              <b>"We are committed to providing the highest quality dental care."</b>{' '}
              For comprehensive and advanced dental services, trust Daol Dental.
            </p>
            <p className="max-w-2xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Experience personalized care from our team of dedicated dental professionals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
              <div className="flex-shrink-0">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2 leading-snug">
                  {feature.heading}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
