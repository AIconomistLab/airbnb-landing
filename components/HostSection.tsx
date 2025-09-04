'use client';

import React from 'react';
import { DollarSign, Shield, Users, TrendingUp } from 'lucide-react';

/**
 * Host Section Component - Encourages users to become hosts
 * Features benefits and incentives for potential hosts
 * TODO: Add real host earnings calculator
 * FIXME: Implement proper form validation for host registration
 */
export default function HostSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Gana dinero extra',
      description: 'Los anfitriones ganan en promedio $924 por mes compartiendo su espacio',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Shield,
      title: 'Protección garantizada',
      description: 'AirCover para anfitriones protege tu propiedad hasta por $3M en daños',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Users,
      title: 'Comunidad global',
      description: 'Únete a millones de anfitriones en más de 220 países y regiones',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento continuo',
      description: 'El turismo sigue creciendo, convierte tu espacio en una fuente de ingresos',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <section id="host" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-100)] mb-6">
              Gana dinero como 
              <span className="text-[var(--primary-100)]"> anfitrión</span>
            </h2>
            <p className="text-xl text-[var(--text-200)] mb-8">
              Comparte tu espacio y comienza a ganar dinero en Airbnb. 
              Es fácil comenzar y siempre tienes el control.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`${benefit.bgColor} p-2 rounded-lg`}>
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-100)] mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[var(--text-200)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1 sm:flex-none">
                Comenzar como anfitrión
              </button>
              <button className="border border-[var(--primary-100)] text-[var(--primary-100)] hover:bg-[var(--primary-300)] font-medium px-6 py-3 rounded-lg transition-all duration-200">
                Calcular ganancias
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Anfitrión feliz en su propiedad"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-2xl font-bold text-[var(--primary-100)] mb-1">$924</div>
              <div className="text-sm text-[var(--text-200)]">Ganancia promedio mensual</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}