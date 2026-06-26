# 🩺 Alpha - Doctor & Diagnostic Center Management System

Alpha is a modern, secure, and responsive Doctor & Diagnostic Center Management web application built with **Next.js**. The platform enables patients to find doctors, view detailed information, book appointments, and manage their appointments through a personalized dashboard.

---

## 🚀 Features

### 🏠 Home Page

#### Navigation Bar
- Logo and project name (**Alpha**) on the left
- Navigation links in the center:
  - Home
  - All Appointments
  - Dashboard
- Authentication section on the right:
  - Login & Register buttons for guests
  - Profile Avatar & Logout button for authenticated users

#### Banner Section
- Healthcare-related banner image
- Informative and promotional content
- Built using relative and absolute positioning

#### Commitment Section
Displays Alpha's commitments to patients using **3 informative cards**.

#### Statistics Section
Shows important platform statistics using **4 cards**:
- Total Doctors
- Total Bookings
- Available Tests
- Departments

#### Top Doctors Section
Displays the **Top 3 Doctors** with:
- Doctor Image
- Name
- Degree
- Designation
- View Details Button

#### Health Packages Section
Displays **3 Health Packages** with discount offers.

#### Footer
A professional footer containing:
- Quick Links
- Contact Information
- Copyright Information

> **Note:** Navbar and Footer remain visible across all pages while page content changes dynamically.

---

## 📅 All Appointments Page

### Features

#### Doctor Search
- Search doctors by doctor name

#### Doctor Listing
- Displays all available doctors using responsive cards

#### Doctor Cards Include
- Doctor Image
- Name
- Degree
- Designation
- Short Description
- View Details Button

#### Doctor Details Page
When a user clicks **View Details**:

- Authenticated users can access the page directly.
- Unauthenticated users are redirected to the Login page.

### Doctor Details Include
- Name
- Degree
- Designation
- Available Days
- Available Time
- Location
- Consultation Fee

### Appointment Booking

Clicking **Book Appointment** opens a modal form.

#### Appointment Form Fields
- Patient Name
- Contact Number
- Available Day
- Available Time

After successful submission:
- Appointment data is stored in the database
- Success notification displayed using React Toastify

---

## 📊 Dashboard

The Dashboard contains two protected routes:

### 1. My Appointments

#### Features
- Accessible only to authenticated users
- Redirects guests to Login page
- Displays all appointments of the logged-in user

#### Appointment Card Actions

##### Edit Appointment
Users can update:
- Patient Information
- Contact Number
- Appointment Date
- Appointment Time

> Doctor information remains unchanged.

Changes are automatically synchronized with the backend.

##### Delete Appointment
- Opens a confirmation modal
- Requires user confirmation
- Removes appointment from both frontend and backend

---

### 2. My Profile

Displays authenticated user information:

- Name
- Email
- Profile Picture

---

## 🔐 Authentication

### Email & Password Authentication
- User Registration
- User Login
- User Logout

### Social Authentication
- Google Login

---

## 🛡️ Authorization

Protected routes are implemented using:

- Next.js `proxy.js`
- Authentication verification middleware

Unauthorized users cannot access private routes.

---

## 🔒 Security

Security features include:

- JWT (JSON Web Token)
- Better Auth
- Secure Session Management
- Protected API Routes

---

## 📱 Responsive Design

Fully responsive across:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

## ✨ Additional Features

- Loading Spinner
- Custom 404 Not Found Page
- React Toastify Notifications
- Framer Motion Animations
- Modal-based Appointment Booking
- Protected Routes
- Dynamic UI Rendering

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS
- HeroUI
- Framer Motion

### Authentication & Security
- Better Auth
- JWT

### Notifications
- React Toastify

---

## 🎯 Project Objective

Alpha aims to provide a seamless healthcare experience by allowing patients to easily discover doctors, schedule appointments, and manage healthcare services through a secure and user-friendly platform.

---

## 👨‍💻 Developed By

**Afaz**  
Software Engineering Student

---
