# 🚖 Cabanaut (Ride-Sharing Application)

A role-based ride-sharing platform designed to seamlessly connect riders with drivers in an efficient and reliable manner, while providing administrators with complete oversight and control of the entire system. The platform enables riders to request rides in real-time, track driver locations, estimate fares, and choose preferred payment methods. Drivers can manage their availability, accept or decline ride requests, update ride statuses, and monitor their earnings through comprehensive dashboards. Administrators have access to advanced tools for user management, ride oversight, and analytics, allowing them to track system activity, approve or suspend accounts, and analyze trends in rides and revenue. The application ensures secure authentication, robust role-based access control, and proper handling of account statuses, such as blocked, suspended, or offline users, to maintain a safe, reliable, and user-friendly experience. With optional integration for Google and Facebook logins, persistent session management, and scalable architecture, this platform is built to cater to the demands of modern ride-sharing services while providing an intuitive and seamless experience for all users.

- 🌐 [Live Preview](https://cabanaut-frontend.vercel.app)  
  ![Homepage Preview](https://i.ibb.co.com/VcnsqB0s/cabaunaut.png)

---

## 🛠 Technology Stack

- **Frontend:** Vite + React.js
- **Backend:** Node.js + Express.js (API)
- **Database:** MongoDB + Mongoose
- **State Management:** Redux
- **UI Library:** Shadcn UI
- **Authentication:** JWT
- **Charts & Analytics:** Recharts
- **Styling:** TailwindCSS

---

## ✨ Features

### 🏃 Rider Features

- **Ride Request Form:** Pickup & destination, fare estimation, payment method selection.
- **Ride History:** Paginated list with search and filters (date, fare, status).
- **Ride Details Page:** Timestamps, driver info, ride status timeline.
- **Profile Management:** Edit Name, Phone Number, Change Password.

### 🚗 Driver Features

- **Availability Control:** Online/Offline toggle.
- **Incoming Requests:** Accept or reject rider offers.
- **Active Ride Management:** Update ride status (Accepted → Picked Up → In Transit → Completed → Cancelled).
- **Earnings Dashboard:** Visual breakdown (daily, weekly, monthly) with charts.
- **Ride History:** Paginated and filterable past ride records.
- **Profile Management:** Update vehicle details, contact info, and password.

### 🛡 Admin Features

- **User Management:** Search, filter, block/unblock riders, approve/suspend drivers.
- **Ride Oversight:** View all rides with filtering options by date, status, driver, or rider.
- **Analytics Dashboard:** Data visualization for ride volume, revenue trends, and driver activity.
- **Search & Filter Tools:** Consistent across all admin listing pages.
- **Profile Management:** Update personal profile and password.

---

## 🧪 Development & Running Locally

### Clone the Repository

```bash
https://github.com/farhana988/Cabanaut-frontend.git
cd Cabanaut-frontend
```

### Install Dependencies

```bash
npm install
```

### Create a .env.local file and add:

```bash
VITE_BASE_URL=your_api_key
```

### Run the Frontend

```bash
npm run dev
```
