# Vehicle Rental System

**Live URL :** [Vehicle Rental App](https://vehicle-rental-system-phi-gold.vercel.app/)

---

## Project Overview

Vehicle Rental System is a RESTful API built with Node.js and TypeScript, using PostgreSQL as the database. It allows users to manage vehicles, handle bookings, and perform authentication with role-based access control. Admins can add, update, or delete vehicles, while customers can browse available vehicles and create bookings. The system ensures secure password storage and JWT-based authentication for protected routes.


---

## **Features**

- User authentication (Sign Up, Sign In) using JWT
- Role-based access: admin and customer
- Add, update, and delete vehicles (Admin only)
- Vehicle booking system for customers
- Automatic calculation of total rental price based on selected dates
- Vehicle availability tracking

---

## **Technology Stack**

- **Backend:** Node.js + TypeScript  
- **Web Framework:** Express.js  
- **Database:** PostgreSQL  
- **Authentication:** JSON Web Tokens (JWT)  
- **Security:** bcrypt for password hashing  

---


## **Setup & Usage Instructions**

1. **Clone the repository**
```bash
git clone https://github.com/marziulrafi/Vehicle-Rental-System
cd vehicle-rental-system
```
2. **Install Dependencies**
```bash
npm install
```
3. **Create a .env file at the root with the following variables**
```bash
PORT=5000
JWT_SECRET=your_jwt_secret
CONNECTION=your_postgresql_url
```
4. **Run the server**
```bash
npm run dev
```
5. **Access the API (Base URL)**
```bash
http://localhost:5000/api/v1
```
