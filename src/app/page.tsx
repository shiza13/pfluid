"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Droplets, Leaf, Factory } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
    const services = [
    {
      title: "Design & Engineering Services",
      description:
        "We provide end-to-end design and engineering solutions tailored to your industrial and water management needs.",
      img: "/design1.png"
       },
    {
      title: "Up-gradation of Existing Water Treatment Facilities",
      description:
        "Enhancing the efficiency, reliability, and sustainability of existing water and wastewater treatment systems.",
      img: "/design2.png" },
    {
      title: "Operation & Maintenance",
      description:
        "Our expert team ensures smooth operation and long-term maintenance of industrial water and wastewater treatment facilities.",
      img: "/design.png" },
  ];
  const products = [
  {
    title: "Desalination Plants",
    description:
      "Advanced desalination systems for converting seawater into fresh, usable water.",
    image: "/desalination.png",
  },
  
  {
    title: "Industrial / Waste Water Reuse",
    description:
      "Eco-friendly wastewater treatment and reuse solutions for industries.",
    image: "/I water.png",
  },
  
  {
    title: "Ultra-Filtration",
    description:
      "Advanced filtration systems to remove suspended solids and bacteria effectively.",
    image: "/Ultra filtration.png",
  },
  
  
];
  return (
    
   <div>
    
    <Header/>

    
     
<div className="mb-8">
   <Hero />
</div>

<section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <div className="relative">
    <Image
  src="/about1.png"
  alt="About Fluid Management Service"
  width={1200}
  height={600}
  className="rounded-2xl shadow-lg w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
/>

        
        </div>

        {/* Right: Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#004d66] mb-6">
            About Fluid Management Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At <span className="font-semibold">Fluid Management Service (FMS)</span>, 
            we specialize in total water and waste management solutions. 
            Our mission is to help industries reduce water usage, recycle effluents, 
            and adopt sustainable practices that keep them green and competitive. 
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center md:items-start">
              <Droplets className="h-10 w-10 text-[#004d66] mb-2" />
              <p className="font-medium">Water Conservation</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Leaf className="h-10 w-10 text-[#004d66] mb-2" />
              <p className="font-medium">Eco-Friendly Solutions</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Factory className="h-10 w-10 text-[#004d66] mb-2" />
              <p className="font-medium">Industry Expertise</p>
            </div>
          </div>

          {/* Call to Action */}
          <Link
            href="/About"
            className="inline-block bg-[#004d66] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#006680] transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>

    <section className="mb-8 p-8 bg-gray-100 py-20 mt-16" id="services">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
      Our Services
    </h2>

    <div className=" mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative group bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-[#001f3f]"
        >
          <div className="bg-gray-50 aspect-[23/16] relative">
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover"
            />

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href="/explore"
                className="px-5 py-2 rounded-lg bg-[#001f3f] text-white text-sm font-semibold tracking-wide shadow-md"
              >
                Explore
              </Link>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              {service.title}
            </h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-left mb-8">
      <Link
        href="/About"
        className="inline-block bg-[#004d66] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#006680] transition"
      >
        Explore Services
      </Link>
    </div>
  </div>
</section>

<section className="mb-8 p-4 bg-gray-50" id="products">
  <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
    <motion.h2
      className="text-3xl font-bold text-slate-900 mb-8 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      Our Products
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
      {products.map((product, index) => (
        <motion.div
          key={index}
          className="relative bg-gray-100 rounded-md overflow-hidden shadow-md transition group hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-[#001f3f]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 aspect-[23/16] relative">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              {product.title}
            </h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              {product.description}
            </p>
          </div>

          <Link
            href="/products"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
          >
            <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
              Explore
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
  <div className="text-center mt-10 mb-8">
    <Link
      href="/industries"
      className="inline-block px-6 py-2 rounded-md bg-[#001f4d] hover:bg-blue-900 igo-700 text-white text-base font-medium transition"
    >
      Explore Products
    </Link>
  </div>
</section>

<div className="mb-8 bg-[#f0f4f8] p-6 rounded-xl shadow-md">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
      Industries We Serve
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:ring-4 hover:ring-[#001f3f] group">
        <div className="bg-gray-50 aspect-[23/16] relative">
          <Image
            src="/textiledye.png"
            alt="Textile Industry"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Textile</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Water-efficient solutions for textile processing and dyeing
            industries.
          </p>
        </div>
        <Link
          href="/industries"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
            Explore
          </span>
        </Link>
      </div>

      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:ring-4 hover:ring-[#001f3f] group">
        <div className="bg-gray-50 aspect-[23/16] relative">
          <Image
            src="/ultrapure.png"
            alt="Pharmaceuticals Industry"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Pharmaceuticals
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Purification systems to meet strict quality standards in pharma
            production.
          </p>
        </div>
        <Link
          href="/industries"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
            Explore
          </span>
        </Link>
      </div>

      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:ring-4 hover:ring-[#001f3f] group">
        <div className="bg-gray-50 aspect-[23/16] relative">
          <Image
            src="/food.png"
            alt="Food and Beverages Industry"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Food & Beverages
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ensuring safe, clean water for food and beverage manufacturing.
          </p>
        </div>
        <Link
          href="/industries"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
            Explore
          </span>
        </Link>
      </div>
    </div>

    <div className="mb-8"> </div>
    <div className="text-left">
      <Link
        href="/About"
        className="inline-block bg-[#001f4d] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#006680] transition"
      >
        Explore more Industries
      </Link>
    </div>
  </div>
</div>

<div className="p-6 bg-[#f0f4f8]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-slate-900 mb-10 text-center">
      Our Plants
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl group hover:ring-4 hover:ring-[#001f4d]">
        <Image
          src="/reverseosmosis.png"
          alt="Reverse Osmosis System"
          width={500}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Reverse Osmosis System
          </h3>
          <p className="text-slate-600 text-sm">
            High-efficiency RO plants for pure water production in industrial
            applications.
          </p>
        </div>
        <Link
          href="/plants-components"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
            Explore
          </span>
        </Link>
      </div>

      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl group hover:ring-4 hover:ring-[#001f4d]">
        <Image
          src="/textile.png"
          alt="Dye Purification System"
          width={500}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Dye Purification System
          </h3>
          <p className="text-slate-600 text-sm">
            Efficient treatment for textile dye wastewater to meet environmental
            standards.
          </p>
        </div>
        <Link
          href="/plants-components"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
            Explore
          </span>
        </Link>
      </div>

      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl group hover:ring-4 hover:ring-[#001f4d]">
        <Image
          src="/waterrecycle.png"
          alt="Wastewater Recycling"
          width={500}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Wastewater Recycling
          </h3>
          <p className="text-slate-600 text-sm">
            Minimizes effluent discharge by recycling water within industrial
            processes.
          </p>
        </div>
        <Link
          href="/plants-components"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
            Explore
          </span>
        </Link>
      </div>
    </div>
  </div>
</div>

<div className="p-6 bg-[#f0f4f8] mt-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-slate-900 mb-10 text-center">
      Our Components
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl group hover:ring-4 hover:ring-[#001f4d]">
        <Image
          src="/membranes.png"
          alt="Membranes"
          width={500}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Membranes</h3>
          <p className="text-slate-600 text-sm">
            High-quality membranes for efficient water purification and
            filtration.
          </p>
        </div>
        <Link
          href="/plants-components"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
            Explore
          </span>
        </Link>
      </div>

      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl group hover:ring-4 hover:ring-[#001f4d]">
        <Image
          src="/centrifugal pumps.png"
          alt="Centrifugal Pumps"
          width={500}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Centrifugal Pumps
          </h3>
          <p className="text-slate-600 text-sm">
            Reliable pumps for smooth operation in water and wastewater systems.
          </p>
        </div>
        <Link
          href="/plants-components"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
            Explore
          </span>
        </Link>
      </div>

      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl group hover:ring-4 hover:ring-[#001f4d]">
        <Image
          src="/pressure vessel.png"
          alt="Pressure Vessels"
          width={500}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Pressure Vessels
          </h3>
          <p className="text-slate-600 text-sm">
            Durable pressure vessels designed for high-performance water
            treatment systems.
          </p>
        </div>
        <Link
          href="/plants-components"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="px-4 py-2 bg-[#001f4d] text-white rounded-md font-medium">
            Explore
          </span>
        </Link>
      </div>

      <div className=" text-left">
        <Link
          href="/plant&component"
          className="inline-block bg-[#004d66] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#006680] transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</div>

<Footer />

</div>
);
}