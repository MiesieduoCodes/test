import { Heart, Users, Stethoscope, Activity, Eye, Brain, Bone, Lungs } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart health services including diagnostics, treatment, and preventive care.',
    features: ['ECG & EKG', 'Echocardiography', 'Stress Testing', 'Cardiac Rehabilitation'],
  },
  {
    icon: Users,
    title: 'Pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents.',
    features: ['Well-child Visits', 'Vaccinations', 'Developmental Screening', 'Emergency Care'],
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Primary healthcare services for all ages with comprehensive medical care.',
    features: ['Annual Check-ups', 'Chronic Disease Management', 'Health Screenings', 'Preventive Care'],
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: '24/7 emergency medical services for urgent health situations.',
    features: ['Trauma Care', 'Critical Care', 'Emergency Surgery', 'Rapid Response'],
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Eye care services including vision correction and eye disease treatment.',
    features: ['Eye Exams', 'Cataract Surgery', 'Glaucoma Treatment', 'Vision Correction'],
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Diagnosis and treatment of disorders affecting the nervous system.',
    features: ['Brain Imaging', 'Epilepsy Treatment', 'Stroke Care', 'Neurological Exams'],
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Treatment of musculoskeletal conditions and injuries.',
    features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Physical Therapy'],
  },
  {
    icon: Lungs,
    title: 'Pulmonology',
    description: 'Respiratory health services for lung and breathing conditions.',
    features: ['Lung Function Tests', 'Asthma Management', 'COPD Treatment', 'Sleep Studies'],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of medical services to meet all your healthcare needs.
          Our team of experienced professionals is dedicated to providing the highest quality care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <Icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-500 flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Specific Service?</h2>
        <p className="text-xl mb-6">
          Contact us to learn more about our services or to schedule a consultation.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/appointments"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            Book Appointment
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}


