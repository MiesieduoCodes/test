'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getCurrentUser, logout } from '@/lib/auth';
import { User } from 'firebase/auth';
import { Menu, X, User as UserIcon } from 'lucide-react';

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    getCurrentUser().then((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    window.location.href = '/';
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            MedTech
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`transition font-medium ${isActive('/') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`transition font-medium ${isActive('/services') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
            >
              Services
            </Link>
            <Link
              href="/appointments"
              className={`transition font-medium ${isActive('/appointments') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
            >
              Appointments
            </Link>
            <Link
              href="/about"
              className={`transition font-medium ${isActive('/about') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition font-medium ${isActive('/contact') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
            >
              Contact
            </Link>

            {loading ? (
              <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition"
                >
                  <UserIcon className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                {(user.email?.includes('admin') || user.email === 'admin@medtech.com') && (
                  <Link
                    href="/admin"
                    className="text-primary-600 hover:text-primary-700 font-semibold transition"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition shadow-md hover:shadow-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-primary-600 hover:text-primary-700"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className={`block font-medium transition ${isActive('/') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`block font-medium transition ${isActive('/services') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/appointments"
              className={`block font-medium transition ${isActive('/appointments') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Appointments
            </Link>
            <Link
              href="/about"
              className={`block font-medium transition ${isActive('/about') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block font-medium transition ${isActive('/contact') ? 'text-primary-600 font-semibold' : 'text-gray-700 hover:text-primary-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block text-primary-600 font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                {(user.email?.includes('admin') || user.email === 'admin@medtech.com') && (
                  <Link
                    href="/admin"
                    className="block text-primary-600 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}



