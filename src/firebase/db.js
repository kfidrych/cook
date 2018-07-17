import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const doCreateClass = (title, description, price, category) =>
  db.ref(`classes`).push().set({
    title,
    description,
    price,
    category
  });

export const onceGetClasses = () =>
  db.ref('classes').once('value');

export const doCreateAppointment = (id, date) =>
  db.ref(`appointments/${id}`).set({
    date,
    user: null
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other db APIs ...