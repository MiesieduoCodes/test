import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
  getDoc
} from 'firebase/firestore';
import { db } from './firebase';

export interface Appointment {
  id?: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorName: string;
  date: Date;
  time: string;
  reason: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  userId?: string;
  createdAt?: Date;
}

export const createAppointment = async (appointment: Omit<Appointment, 'id' | 'createdAt'>) => {
  if (!db) {
    return { id: null, error: 'Firebase is not configured. Please check your environment variables.' };
  }
  try {
    const docRef = await addDoc(collection(db, 'appointments'), {
      ...appointment,
      date: Timestamp.fromDate(appointment.date),
      status: 'pending',
      createdAt: Timestamp.now(),
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getAppointments = async (userId?: string) => {
  if (!db) {
    return { appointments: [], error: 'Firebase is not configured. Please check your environment variables.' };
  }
  try {
    let q = query(collection(db, 'appointments'), orderBy('date', 'desc'));
    
    if (userId) {
      q = query(collection(db, 'appointments'), where('userId', '==', userId), orderBy('date', 'desc'));
    }
    
    const querySnapshot = await getDocs(q);
    const appointments: Appointment[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      appointments.push({
        id: doc.id,
        ...data,
        date: data.date.toDate(),
        createdAt: data.createdAt?.toDate(),
      } as Appointment);
    });
    
    return { appointments, error: null };
  } catch (error: any) {
    return { appointments: [], error: error.message };
  }
};

export const updateAppointment = async (id: string, updates: Partial<Appointment>) => {
  if (!db) {
    return { error: 'Firebase is not configured. Please check your environment variables.' };
  }
  try {
    const appointmentRef = doc(db, 'appointments', id);
    const updateData: any = { ...updates };
    
    if (updates.date) {
      updateData.date = Timestamp.fromDate(updates.date);
    }
    
    await updateDoc(appointmentRef, updateData);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const deleteAppointment = async (id: string) => {
  if (!db) {
    return { error: 'Firebase is not configured. Please check your environment variables.' };
  }
  try {
    await deleteDoc(doc(db, 'appointments', id));
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getAppointment = async (id: string) => {
  if (!db) {
    return { appointment: null, error: 'Firebase is not configured. Please check your environment variables.' };
  }
  try {
    const docRef = doc(db, 'appointments', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        appointment: {
          id: docSnap.id,
          ...data,
          date: data.date.toDate(),
          createdAt: data.createdAt?.toDate(),
        } as Appointment,
        error: null,
      };
    } else {
      return { appointment: null, error: 'Appointment not found' };
    }
  } catch (error: any) {
    return { appointment: null, error: error.message };
  }
};



