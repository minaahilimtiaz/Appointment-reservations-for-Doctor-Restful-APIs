import firebaseAdmin from '../../config/firebaseConfig';
import { AppointmentRequestBody } from '../interfaces/appointmentInterface';

const appointmentCollection = firebaseAdmin.firestore().collection('reservations');

const addAppointment = async (appointmentId: string, data: AppointmentRequestBody) =>
  await appointmentCollection.doc(appointmentId).set(data);

const updateAppointment = async (appointmentId: string, data: AppointmentRequestBody) => {
  const appointmentRef = appointmentCollection.doc(appointmentId);

  try {
    // Update the document with the provided data
    await appointmentRef.set(data);

    console.log('Update successful');
  } catch (error) {
    console.error('Error updating data:', error);
    // Handle the error as needed
  }
};

export default { addAppointment, updateAppointment };
