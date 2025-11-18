import Link from "next/link";
import { Calendar, Users, Stethoscope, Clock, Shield, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to MedTech</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your trusted partner in healthcare. We provide comprehensive medical services 
            with a focus on patient care and modern technology.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/appointments"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MedTech?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Stethoscope className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Board-certified physicians with years of experience in their respective fields.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Round-the-clock emergency services and online appointment booking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art medical equipment and digital health records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <Heart className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cardiology</h3>
              <p className="text-gray-600 text-sm">Heart health and cardiovascular care</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <Users className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Pediatrics</h3>
              <p className="text-gray-600 text-sm">Specialized care for children</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <Calendar className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">General Medicine</h3>
              <p className="text-gray-600 text-sm">Comprehensive primary care</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <Stethoscope className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600 text-sm">24/7 emergency medical services</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-primary-600 font-semibold hover:underline"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Book your appointment today and take the first step towards better health.</p>
          <Link
            href="/appointments"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition inline-block"
          >
            Schedule Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}


