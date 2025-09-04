'use client';

import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

/**
 * Footer Component - Site footer with links and information
 * Features organized link sections and social media
 * TODO: Add newsletter subscription functionality
 * FIXME: Ensure all footer links have proper destinations
 */
export default function Footer() {
  const footerSections = [
    {
      title: 'Soporte',
      links: [
        'Centro de ayuda',
        'AirCover',
        'Discriminación contra la discapacidad',
        'Opciones de cancelación',
        'Denuncia problema del barrio'
      ]
    },
    {
      title: 'Hospedaje',
      links: [
        'Hospedar tu casa',
        'AirCover para anfitriones',
        'Recursos para anfitriones',
        'Foro de la comunidad',
        'Hospedaje responsable'
      ]
    },
    {
      title: 'Airbnb',
      links: [
        'Página de prensa',
        'Nuevas funciones',
        'Carreras',
        'Inversionistas',
        'Tarjetas de regalo'
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[var(--bg-200)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-100)] to-[var(--primary-200)] rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="font-bold text-xl text-[var(--primary-100)]">airbnb</span>
            </div>
            <p className="text-[var(--text-200)] mb-4">
              Pertenece a cualquier lugar del mundo con experiencias únicas y hogares acogedores.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[var(--text-200)] hover:text-[var(--primary-100)] hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-[var(--text-100)] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-[var(--text-200)] hover:text-[var(--primary-100)] transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm text-[var(--text-200)]">
              <span>© 2024 Airbnb, Inc.</span>
              <a href="#" className="hover:text-[var(--primary-100)] transition-colors duration-200">
                Privacidad
              </a>
              <a href="#" className="hover:text-[var(--primary-100)] transition-colors duration-200">
                Términos
              </a>
              <a href="#" className="hover:text-[var(--primary-100)] transition-colors duration-200">
                Mapa del sitio
              </a>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2 text-[var(--text-200)]">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent border-none text-sm focus:outline-none cursor-pointer">
                <option>Español (ES)</option>
                <option>English (US)</option>
                <option>Français (FR)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}