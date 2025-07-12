'use client'

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import * as Icon from "@phosphor-icons/react/dist/ssr"

export default function SliderOne() {
  return (
    <section className="section slider sm:h-[47.5rem] h-[34rem] relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        effect="fade"
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        className='w-full h-full swiper-pagination-white'
        autoplay={{
          delay: 5000,
        }}
      >
        <SwiperSlide>
          <div className="slider_bg absolute top-0 left-0 w-full h-full pointer-events-none">
            <Image width={2000} height={2000} src="/images/slider/painter.webp" alt="Fast & Professional Home Repairs" className="h-full object-cover" />
          </div>
          <div className="container flex flex-col justify-center relative h-full max-sm:-mt-10">
           <h2 className="section_tit_two lg:w-2/3 text-white heading1">
  Fast & Reliable Home Renovation Services in Dubai
</h2>
<p className="section_desc mt-4 text-white body2" style={{ "--i": 1 }}>
  Transform your home with our expert renovation team in Dubai. We handle everything from quick upgrades to full remodeling—always on time and professionally done.
</p>
            <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
              <li className="slider_btn_item" style={{"--i": 2}}>
                <Link href="/pages/our-services" className="slider_btn btn btn_icon">
                  <span>Book a Service</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
              <li className="slider_btn_item" style={{"--i": 3}}>
                <Link href="/contact" className="slider_btn btn btn_icon bg-white">
                  <span>Get A quote</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_bg absolute top-0 left-0 w-full h-full pointer-events-none">
            <Image width={2000} height={2000} src="/images/slider/plumbing.webp" alt="Expert Renovation & Improvement Services" className="h-full object-cover" />
          </div>
          <div className="container flex flex-col justify-center relative h-full max-sm:-mt-10">
           <h2 className="section_tit_two lg:w-2/3 text-white heading1">
  Quick Plumbing Solutions in Dubai
</h2>
<p className="section_desc mt-4 text-white body2" style={{ "--i": 1 }}>
  Need help fast? Our Dubai plumbers deliver quick, expert repairs for leaks, blockages, and all emergency plumbing needs—available 24/7.
</p>

            <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
              <li className="slider_btn_item" style={{"--i": 2}}>
                <Link href="/pages/our-services" className="slider_btn btn btn_icon">
                  <span>Book a Service</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
              <li className="slider_btn_item" style={{"--i": 3}}>
                <Link href="/contact" className="slider_btn btn btn_icon bg-white">
                  <span>Get A quote</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_bg absolute top-0 left-0 w-full h-full pointer-events-none">
            <Image width={2000} height={2000} src="/images/slider/electrical.webp" alt="Comprehensive Maintenance Services" className="h-full object-cover" />
          </div>
          <div className="container flex flex-col justify-center relative h-full max-sm:-mt-10">
           <h2 className="section_tit_two lg:w-2/3 text-white heading1">
  Complete Home Maintenance Solutions in Dubai
</h2>
<p className="section_desc mt-4 text-white body2" style={{ "--i": 1 }}>
  From electrical repairs to plumbing work and more, we provide fast, affordable, and reliable maintenance services to keep your home running smoothly.
</p>

            <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
              <li className="slider_btn_item" style={{"--i": 2}}>
                <Link href="/pages/our-services" className="slider_btn btn btn_icon">
                  <span>Book a Service</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
              <li className="slider_btn_item" style={{"--i": 3}}>
                <Link href="/contact" className="slider_btn btn btn_icon bg-white">
                  <span>Get A quote</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
