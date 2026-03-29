# 🚀 FanFuel

### Fuel Your Passion, Fund Your Future

FanFuel is a modern, high-performance crowdfunding platform designed for creators. It enables artists, developers, and influencers to receive direct support from their fans through a sleek, transparent, and secure interface.

---

## ✨ Features

* 💎 **Premium Glassmorphism UI**
  Futuristic interface built with Tailwind CSS featuring radial gradients, backdrop blur effects, and interactive dark-themed components.

* 🔐 **Secure Authentication**
  Seamless login powered by NextAuth.js with GitHub OAuth integration.

* 💳 **Integrated Payments**
  Secure and fast INR transactions powered by Razorpay.

* 📊 **Dynamic Dashboard**
  Creator-focused control panel to manage profiles, update visuals, and track funding activity.

* 🏆 **Public Supporter Leaderboard**
  Real-time display of top supporters along with their messages.

* ⚡ **Real-time Session Updates**
  Optimized session handling ensures instant synchronization of user data across the application.

---

## 🛠️ Tech Stack

| Category       | Technology              |
| -------------- | ----------------------- |
| Framework      | Next.js 16 (App Router) |
| Language       | JavaScript / React      |
| Database       | MongoDB (Mongoose)      |
| Authentication | NextAuth.js             |
| Payments       | Razorpay API            |
| Styling        | Tailwind CSS            |
| Notifications  | React Toastify          |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/FanFuel.git
cd FanFuel
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Database
MONGODB_URI=your_mongodb_connection_string

# App URL
NEXT_PUBLIC_URL=http://localhost:3000
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📸 Screenshots
* Landing Page
<img width="1890" height="924" alt="image" src="https://github.com/user-attachments/assets/0fd94056-bbbb-4ffc-b9c0-cb2396e21e7a" />

* Dashboard
<img width="1890" height="919" alt="image" src="https://github.com/user-attachments/assets/2ba002c6-fda1-4776-a1f4-5b9d371a8110" />

* Payment Page
<img width="1894" height="916" alt="image" src="https://github.com/user-attachments/assets/004c25a7-adde-46de-8442-b4d77977672f" />


---

## ❤️ Acknowledgements

Built with passion and dedication by **Sourabh**.

If you like this project, consider giving it a ⭐ on GitHub!
