import Link from "next/link";
import { Calendar, Users, Stethoscope, Clock, Shield, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">Welcome to MedTech</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner in healthcare. We provide comprehensive medical services 
            with a focus on patient care and modern technology.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/appointments"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition transform hover:scale-105 shadow-lg"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition transform hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose MedTech?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience healthcare excellence with our comprehensive services and dedicated team
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Doctors</h3>
              <p className="text-gray-600 leading-relaxed">
                Board-certified physicians with years of experience in their respective fields.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock emergency services and online appointment booking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art medical equipment and digital health records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive healthcare services tailored to meet your needs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cardiology</h3>
              <p className="text-gray-600 text-sm">Heart health and cardiovascular care</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pediatrics</h3>
              <p className="text-gray-600 text-sm">Specialized care for children</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">General Medicine</h3>
              <p className="text-gray-600 text-sm">Comprehensive primary care</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600 text-sm">24/7 emergency medical services</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition group"
            >
              View All Services
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Book your appointment today and take the first step towards better health.</p>
          <Link
            href="/appointments"
            className="bg-white text-primary-600 px-10 py-4 rounded-lg font-semibold hover:bg-primary-50 transition inline-block shadow-lg transform hover:scale-105"
          >
            Schedule Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}



