# 💸 Personal Finance Visualizer

A modern full-stack web application to help you **track your expenses**, **analyze your spending habits**, and **stay in control of your personal finances**. Whether you're budgeting for groceries or visualizing monthly outflows, this tool has you covered.

---

##Features

 **Add Transactions**  
  Input details like description, amount, date, and category.

 **Transaction History**  
  View your most recent transactions in a clean list.

 **Spending Breakdown**  
  Visualize where your money goes with a responsive pie chart using `recharts`.

 **Real-Time Updates**  
  Automatically fetches and updates transaction data after submission.

---

##Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/), [React](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/)
- **Backend**: API Routes via App Router
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud-hosted NoSQL)
- **ORM**: [Mongoose](https://mongoosejs.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Language**: TypeScript

---

##  Project Structure

2. Install dependencies
   npm install
3. Set up environment variables
   Create a .env.local file at the root with your MongoDB URI: MONGODB_URI=your_mongodb_connection_string
4. Start the development server
   npm run dev
Now go to http://localhost:3000 and enjoy!

