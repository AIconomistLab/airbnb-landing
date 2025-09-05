'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Users, Home } from 'lucide-react';

/**
 * Hero Section Component - Main promotional content
 * Features compelling messaging and call-to-action
 * TODO: Add dynamic background images rotation
 * FIXME: Optimize hero image loading for better Core Web Vitals
 */
export default function HeroSection() {
  const stats = [
    { icon: Home, value: '4M+', label: 'Hogares únicos' },
    { icon: Users, value: '100M+', label: 'Huéspedes felices' },
    { icon: Star, value: '4.8', label: 'Calificación promedio' },
  ];

  return (
    <section className="relative min-h-[calc(100vh-var(--header-h,4rem))] flex items-center justify-center overflow-hidden">
      {/* Background Image with next/image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="Casa acogedora con vistas"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[var(--primary-300)] text-[var(--primary-100)] rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Promociones Especiales Disponibles
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Descubre hogares únicos
            <br />
            <span className="text-[var(--primary-200)]">y experiencias</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Las experiencias de viaje más inolvidables comienzan ahora. 
            Encuentra aventuras y nuevos lugares con Airbnb. 
            Reserva lugares únicos para hospedarte con anfitriones locales en más de 190+ países.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center group">
              Explorar Promociones
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105">
              Ver Experiencias
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}