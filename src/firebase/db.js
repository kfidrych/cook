import { db } from './firebase';

// User API
export const doCreateUser = (id, username, email, role) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    role
  });

export const doCreateClass = (title, category, price, description) =>
  db.ref(`classes`).push().set({
    title,
    description,
    price,
    category
  });

export const onceGetClasses = () =>
  db.ref('classes').once('value');

export const doCreateAppointment = (date, time, classTitle, user) =>
  db.ref(`appointments`).push().set({
    date,
    time,
    classTitle,
    user
  });

export const doCreateForm = (userEmail, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16) =>
  db.ref(`forms`).push().set({
    userEmail,
    Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    Q6,
    Q7,
    Q8,
    Q9,
    Q10,
    Q11,
    Q12,
    Q13,
    Q14,
    Q15,
    Q16
  });

export const onceGetAppointments = () =>
  db.ref('appointments').once('value');

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetUserRole = (key) =>
  db.ref(`users/${key}/role`).once('value');

export const doDeleteClass = (key) =>
  db.ref('classes').child(key).remove();

export const doDeleteUser = (key) =>
  db.ref('users').child(key).remove();

export const doDeleteAppointment = (key) =>
  db.ref('appointments').child(key).remove();

// Other db APIs ...