import { Award, Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About MedTech</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a leading medical institution committed to providing exceptional healthcare
          services with a focus on patient care, innovation, and excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At MedTech, our mission is to provide accessible, high-quality healthcare services
            that improve the health and well-being of our community. We strive to combine
            compassionate care with cutting-edge medical technology to deliver the best possible
            outcomes for our patients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe that healthcare should be patient-centered, focusing on individual needs
            and preferences while maintaining the highest standards of medical excellence.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our vision is to become a trusted leader in healthcare, recognized for our commitment
            to innovation, patient satisfaction, and community health. We aim to set new standards
            in medical care through continuous improvement and the integration of advanced
            technologies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We envision a future where healthcare is more accessible, efficient, and effective,
            enabled by technology and driven by compassion.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <Heart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p className="text-gray-600">
              We treat every patient with empathy, respect, and understanding.
            </p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We maintain the highest standards in all aspects of medical care.
            </p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We conduct ourselves with honesty, transparency, and ethical principles.
            </p>
          </div>
          <div className="text-center">
            <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace new technologies and methods to improve patient care.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary-600 text-white rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">20+</div>
            <div className="text-lg">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-lg">Expert Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100K+</div>
            <div className="text-lg">Patients Served</div>
          </div>
        </div>
      </div>
    </div>
  );
}


