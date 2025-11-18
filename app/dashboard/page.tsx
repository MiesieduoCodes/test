'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import { getAppointments, Appointment } from '@/lib/db';
import { Calendar, Clock, User, TrendingUp, Activity } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const router = useRouter();

  useEffect(() => {
    getCurrentUser().then((currentUser) => {
      if (!currentUser) {
        router.push('/login');
      } else {
        setUser(currentUser);
        loadAppointments(currentUser.uid);
      }
      setLoading(false);
    });
  }, [router]);

  const loadAppointments = async (userId: string) => {
    const { appointments: userAppointments } = await getAppointments(userId);
    setAppointments(userAppointments);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const upcomingAppointments = appointments
    .filter((apt) => apt.status !== 'cancelled' && new Date(apt.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  const stats = {
    total: appointments.length,
    upcoming: appointments.filter((apt) => apt.status !== 'cancelled' && new Date(apt.date) >= new Date()).length,
    completed: appointments.filter((apt) => apt.status === 'completed').length,
    pending: appointments.filter((apt) => apt.status === 'pending').length,
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.displayName || user?.email}!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Appointments</p>
              <p className="text-3xl font-bold text-primary-600">{stats.total}</p>
            </div>
            <Calendar className="w-12 h-12 text-primary-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Upcoming</p>
              <p className="text-3xl font-bold text-green-600">{stats.upcoming}</p>
            </div>
            <TrendingUp className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed</p>
              <p className="text-3xl font-bold text-blue-600">{stats.completed}</p>
            </div>
            <Activity className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending</p>
              <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
            </div>
            <Clock className="w-12 h-12 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Upcoming Appointments</h2>
          <Link
            href="/appointments"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            View All →
          </Link>
        </div>
        {upcomingAppointments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p>No upcoming appointments.</p>
            <Link
              href="/appointments"
              className="text-primary-600 hover:text-primary-700 font-semibold mt-4 inline-block"
            >
              Book an appointment
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{appointment.doctorName}</h3>
                    <div className="space-y-1 text-gray-600 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{format(appointment.date, 'MMMM dd, yyyy')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      appointment.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/appointments"
            className="bg-primary-600 text-white p-6 rounded-lg hover:bg-primary-700 transition text-center"
          >
            <Calendar className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">Book Appointment</p>
          </Link>
          <Link
            href="/appointments"
            className="bg-gray-100 text-gray-800 p-6 rounded-lg hover:bg-gray-200 transition text-center"
          >
            <User className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">View Appointments</p>
          </Link>
          <Link
            href="/services"
            className="bg-gray-100 text-gray-800 p-6 rounded-lg hover:bg-gray-200 transition text-center"
          >
            <Activity className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">Our Services</p>
          </Link>
        </div>
      </div>
    </div>
  );
}


