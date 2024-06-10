import { useSelector } from "react-redux";
import "react-circular-progressbar/dist/styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminPanel = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const handleOrderCompletion = () => {
    // This action would typically involve dispatching an action to update the Redux state
    alert("Orders will be delivered.");
  };

  const data = [
    { month: "January", orders: 30 },
    { month: "February", orders: 20 },
    { month: "March", orders: 40 },
    { month: "April", orders: 35 },
    { month: "May", orders: 50 },
    { month: "June", orders: 70 },
    { month: "July", orders: 60 },
    { month: "August", orders: 55 },
    { month: "September", orders: 45 },
    { month: "October", orders: 65 },
    { month: "November", orders: 75 },
    { month: "December", orders: 80 },
  ];

  // Customer reach data
  const customerReachData = [
    { metric: "New Users", reach: 400 },
    { metric: "Returning Users", reach: 300 },
    { metric: "Referrals", reach: 150 },
    { metric: "Total Reach", reach: 850 },
  ];

  return (
    <div className="flex">
      <div className="flex-1 p-8">
        <h1 className="text-4xl text-center font-serif">Admin Panel</h1>
        <div className="flex gap-4 mt-8">
          <div className="w-full md:w-3/10 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-serif text-center ">Customer Reach</h2>
            <div className="mt-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  layout="vertical"
                  data={customerReachData}
                  margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="metric" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="reach" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-full md:w-3/10 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-serif text-center mb-2">Total Orders</h2>
            <div className="mt-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={data}
                  layout="horizontal"
                  margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orders" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Pending Orders</h2>
          {cartItems.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">#</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Quantity</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Phone Number</th>
                  <th className="border p-2">Address</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id} className="border-t">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.quantity}</td>
                    <td className="border p-2">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="border p-2">{item.email}</td>
                    <td className="border p-2">{item.phone}</td>
                    <td className="border p-2">{item.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center">No pending orders.</p>
          )}
          <button
            onClick={handleOrderCompletion}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Mark Orders as Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
