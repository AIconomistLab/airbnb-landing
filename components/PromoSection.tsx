'use client';

import React from 'react';
import { Calendar, Percent, Gift, MapPin } from 'lucide-react';

/**
 * Promotional Section Component - Showcases special offers and deals
 * Features grid layout with promotional cards
 * TODO: Connect to real promotional data API
 * FIXME: Add proper image optimization and lazy loading
 */
export default function PromoSection() {
  const promotions = [
    {
      id: 1,
      icon: Percent,
      title: 'Hasta 25% de descuento',
      description: 'En hospedajes seleccionados para estadías de una semana o más',
      validUntil: '31 de Diciembre',
      bgColor: 'bg-[var(--primary-300)]',
      textColor: 'text-[var(--primary-100)]',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      icon: Gift,
      title: 'Primera reserva gratis',
      description: 'Obtén $50 de descuento en tu primera experiencia con nosotros',
      validUntil: '15 de Enero',
      bgColor: 'bg-gradient-to-br from-[var(--accent-100)] to-[var(--accent-200)]',
      textColor: 'text-white',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      icon: Calendar,
      title: 'Reserva flexible',
      description: 'Cancela sin costo hasta 24 horas antes de tu llegada',
      validUntil: 'Disponible siempre',
      bgColor: 'bg-gradient-to-br from-purple-100 to-pink-100',
      textColor: 'text-purple-700',
      image: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      icon: MapPin,
      title: 'Experiencias locales',
      description: 'Descubre actividades únicas guiadas por expertos locales',
      validUntil: 'Todo el año',
      bgColor: 'bg-gradient-to-br from-green-100 to-blue-100',
      textColor: 'text-green-700',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="promociones" className="py-20 bg-[var(--bg-200)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-100)] mb-4">
            Promociones especiales
          </h2>
          <p className="text-xl text-[var(--text-200)] max-w-3xl mx-auto">
            Aprovecha nuestras ofertas limitadas y descubre el mundo con descuentos increíbles
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo, index) => (
            <div 
              key={promo.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`${promo.bgColor} ${promo.textColor} p-2 rounded-full`}>
                      <promo.icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--text-100)] mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-[var(--text-200)] mb-4 line-clamp-2">
                    {promo.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-200)]">
                      Válido hasta: {promo.validUntil}
                    </span>
                    <button className="text-[var(--primary-100)] font-medium hover:underline">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            Ver todas las promociones
          </button>
        </div>
      </div>
    </section>
  );
}