"use client";

import { useState } from 'react';
import SlideUp from './SlideUp';
import { useLanguage } from "@/components/LanguageContext";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${text.alert}`);
  };

  const {language} = useLanguage();
  const text = {
    alert: language === 'EN' ? 'Thank you for your message! We will get back to you soon.' : '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    title: language === 'EN' ? 'Contact' : 'Contacto',
    subtitle: language === 'EN' ? 'Fill out the form below and our team will get back to you as soon as possible.' : 'Llena el siguiente formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.',
    name: language === 'EN' ? 'Full Name *' : 'Nombre Completo *',
    email: language === 'EN' ? 'Email Address *' : 'Correo Electrónico*',
    company: language === 'EN' ? 'Company Name' : 'Nombre de la Empresa',
    phone: language === 'EN' ? 'Phone Number' : 'Número de Teléfono',
    subject: language === 'EN' ? 'Subject *' : 'Asunto *',
    message: language === 'EN' ? 'Message *' : 'Mensaje *',
    phname: language === 'EN' ? 'Enter your full name' : 'Ingresa tu nombre completo',
    phmail: language === 'EN' ? 'your.email@example.com' : 'tu.correo@ejemplo.com',
    phcompany: language === 'EN' ? 'Your company name' : 'El nombre de tu empresa',
    phphone: language === 'EN' ? 'Your phone number' : 'Tu número de teléfono',
    phmessage: language === 'EN' ? 'How can we help you?' : '¿Cómo te podemos ayudar?',
    opt1: language === 'EN' ? 'General Inquiry' : '	Consulta General',
    opt2: language === 'EN' ? 'Services Information' : 'Información de Servicios',
    opt3: language === 'EN' ? 'Request a Quote' : 'Solicitar un Presupuesto',
    opt4: language === 'EN' ? 'Partnership Opportunities' : 'Oportunidades de Asociación',
    opt5: language === 'EN' ? 'Technical Support' : 'Soporte Técnico',
    button: language === 'EN' ? 'Send Message' : 'Enviar Mensaje',
    office: language === 'EN' ? 'Office Location' : 'Ubicación de la Oficina',
    building: language === 'EN' ? 'SOHO Galaxy Building' : 'Edificio SOHO Galaxy',
    info: language === 'EN' ? 'Contact Information' : 'Información de Contacto',
    mail: language === 'EN' ? 'Email:' : 'Correo Electrónico:',
    nphone: language === 'EN' ? 'Phone:' : 'Teléfono:',
    hours: language === 'EN' ? 'Business Hours' : 'Horario de Atención',
    monday: language === 'EN' ? 'Monday - Friday:' : 'Lunes - Viernes:',
    satur: language === 'EN' ? 'Saturday - Sunday:' : 'Sábado - Domingo:',
    closed: language === 'EN' ? 'Closed' : 'Cerrado',
  }

return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <SlideUp>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{text.title}</h1>
          <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto px-4">
            {text.subtitle}
          </p>
        </SlideUp>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
        {/* Left Column - Form */}
        {/*
        <div className="w-full lg:w-[30%] max-w-2xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  {text.name}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={text.phname}
                />
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {text.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={text.phmail}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  {text.company}
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={text.phcompany}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {text.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={text.phphone}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                {text.subject}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="General Inquiry">{text.opt1}</option>
                <option value="Services Information">{text.opt2}</option>
                <option value="Request a Quote">{text.opt3}</option>
                <option value="Partnership Opportunities">{text.opt4}</option>
                <option value="Technical Support">{text.opt5}</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {text.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder={text.phmessage}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              {text.button}
            </button>
          </form>
        </div>
        */}

        {/* Right Column - Map */}
        <div className="w-full lg:w-auto">
          <div className="w-full max-w-2xl lg:max-w-none">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7968382323184!2d-78.48349202417796!3d-0.18801813541363882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a79557d52c3%3A0xa496f4af631f2ae5!2sEdificio%20Soho%20Galaxy!5e0!3m2!1ses-419!2sec!4v1759419615513!5m2!1ses-419!2sec" 
              width="100%" 
              height="300"
              className="sm:h-[400px] lg:h-[450px] lg:w-[600px] rounded-lg sm:rounded-2xl lg:rounded-3xl"
              style={{ border: "0" }}
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Info Boxes Section */}
      <div className="pt-8 sm:pt-12 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Office Location Box */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:border-blue-700 border border-transparent transition-all duration-300 h-full">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3">{text.office}</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {text.building}<br />
              Av. Eloy Alfaro N33-55 y Suiza Oficina 202<br />
              Quito, Ecuador 170518
            </p>
          </div>

          {/* Contact Information Box */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:border-blue-700 border border-transparent transition-all duration-300 h-full">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3">{text.info}</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              <strong>{text.mail}</strong> lgarzon@ecuacf.com<br />
              <strong>{text.nphone}</strong> +593 99 885 2466
            </p>
          </div>

          {/* Business Hours Box */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:border-blue-700 border border-transparent transition-all duration-300 h-full">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3">{text.hours}</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              <strong>{text.monday}</strong> 8:30 AM - 5:30 PM (ECT)<br />
              <strong>{text.satur}</strong> {text.closed}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;