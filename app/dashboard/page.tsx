// "use client";

// import { useEffect, useState } from "react";

// import ProtectedRoute from "@/app/components/ProtectedRoute";

// import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

// import { getDashboardStats } from "@/services/dashboard.service";
// import DashboardSkeletonLoader from "../components/Loading/loading";

// export default function DashboardPage() {
//   const [stats, setStats] = useState<any>(null);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const data = await getDashboardStats();

//         setStats(data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   if (loading) {
//     return (
//       <ProtectedRoute>
//         <DashboardLayout>
//           <DashboardSkeletonLoader />
//         </DashboardLayout>
//       </ProtectedRoute>
//     );
//   }

//   const isAdminDashboard = stats?.dashboard_type === "ADMIN";

//   return (
//     <ProtectedRoute>
//       <DashboardLayout>
//         <div
//           className="
//                     flex
//                     items-center
//                     justify-between
//                     mb-8
//                 "
//         >
//           <div>
//             <h1
//               className="
//                             text-4xl
//                             font-bold
//                         "
//             >
//               Dashboard
//             </h1>

//             <p
//               className="
//                             text-gray-600
//                             mt-2
//                         "
//             >
//               Operational overview of your company
//             </p>
//           </div>
//         </div>

//         {isAdminDashboard && (
//           <div
//             className="
//                     grid
//                     md:grid-cols-3
//                     gap-6
//                 "
//           >
//             <div
//               className="
//                         bg-white
//                         p-6
//                         rounded-lg
//                         shadow
//                     "
//             >
//               <p
//                 className="
//                             text-gray-500
//                         "
//               >
//                 Employees
//               </p>

//               <h2
//                 className="
//                             text-4xl
//                             font-bold
//                             mt-3
//                         "
//               >
//                 {stats?.employees || 0}
//               </h2>
//             </div>

//             <div
//               className="
//                         bg-white
//                         p-6
//                         rounded-lg
//                         shadow
//                     "
//             >
//               <p
//                 className="
//                             text-gray-500
//                         "
//               >
//                 Pending Tasks
//               </p>

//               <h2
//                 className="
//                             text-4xl
//                             font-bold
//                             mt-3
//                             text-yellow-600
//                         "
//               >
//                 {stats?.pending_tasks || 0}
//               </h2>
//             </div>

//             <div
//               className="
//                         bg-white
//                         p-6
//                         rounded-lg
//                         shadow
//                     "
//             >
//               <p
//                 className="
//                             text-gray-500
//                         "
//               >
//                 Completed Tasks
//               </p>

//               <h2
//                 className="
//                             text-4xl
//                             font-bold
//                             mt-3
//                             text-green-600
//                         "
//               >
//                 {stats?.completed_tasks || 0}
//               </h2>
//             </div>

//             <div
//               className="
//                         bg-white
//                         p-6
//                         rounded-lg
//                         shadow
//                     "
//             >
//               <p
//                 className="
//                             text-gray-500
//                         "
//               >
//                 Requirements
//               </p>

//               <h2
//                 className="
//                             text-4xl
//                             font-bold
//                             mt-3
//                         "
//               >
//                 {stats?.requirements || 0}
//               </h2>
//             </div>

//             <div
//               className="
//                         bg-white
//                         p-6
//                         rounded-lg
//                         shadow
//                     "
//             >
//               <p
//                 className="
//                             text-gray-500
//                         "
//               >
//                 Unread Notifications
//               </p>

//               <h2
//                 className="
//                             text-4xl
//                             font-bold
//                             mt-3
//                             text-blue-600
//                         "
//               >
//                 {stats?.unread_notifications || 0}
//               </h2>
//             </div>

//             <div
//               className="
//                         bg-white
//                         p-6
//                         rounded-lg
//                         shadow
//                     "
//             >
//               <p
//                 className="
//                             text-gray-500
//                         "
//               >
//                 Average Rating
//               </p>

//               <h2
//                 className="
//                             text-4xl
//                             font-bold
//                             mt-3
//                         "
//               >
//                 {stats?.average_rating || "N/A"}
//               </h2>
//             </div>
//           </div>
//         )}
//         {!isAdminDashboard && (
//           <div
//             className="
//     grid
//     md:grid-cols-3
//     gap-6
// "
//           >
//             <div
//               className="
//         bg-white
//         p-6
//         rounded-lg
//         shadow
//     "
//             >
//               <p
//                 className="
//             text-gray-500
//         "
//               >
//                 My Tasks
//               </p>

//               <h2
//                 className="
//             text-4xl
//             font-bold
//             mt-3
//         "
//               >
//                 {stats?.my_tasks || 0}
//               </h2>
//             </div>

//             <div
//               className="
//         bg-white
//         p-6
//         rounded-lg
//         shadow
//     "
//             >
//               <p
//                 className="
//             text-gray-500
//         "
//               >
//                 Pending Tasks
//               </p>

//               <h2
//                 className="
//             text-4xl
//             font-bold
//             mt-3
//             text-yellow-600
//         "
//               >
//                 {stats?.pending_tasks || 0}
//               </h2>
//             </div>

//             <div
//               className="
//         bg-white
//         p-6
//         rounded-lg
//         shadow
//     "
//             >
//               <p
//                 className="
//             text-gray-500
//         "
//               >
//                 Completed Tasks
//               </p>

//               <h2
//                 className="
//             text-4xl
//             font-bold
//             mt-3
//             text-green-600
//         "
//               >
//                 {stats?.completed_tasks || 0}
//               </h2>
//             </div>
//           </div>
//         )}
//       </DashboardLayout>
//     </ProtectedRoute>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import ProtectedRoute from "@/app/components/ProtectedRoute";

import {
  Bell,
  CheckCircle2,
  Clock3,
  Users,
  BriefcaseBusiness,
  Star,
} from "lucide-react";

import { getDashboardStats } from "@/services/dashboard.service";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();

        setStats(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <p
            className="
              text-lg
              font-medium
            "
          >
            Loading dashboard...
          </p>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  const isAdmin = stats?.dashboard_type === "ADMIN";

  const chartData = [
    {
      name: "Completed",
      value: stats?.completed_tasks || 0,
    },
    {
      name: "Pending",
      value: stats?.pending_tasks || 0,
    },
  ];

  const COLORS = ["#22c55e", "#f59e0b"];

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-8">
          {/* HEADER */}
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <h1
                className="
                  text-4xl
                  font-bold
                  text-black
                "
              >
                Welcome Back 👋
              </h1>

              <p
                className="
                  text-gray-500
                  mt-2
                "
              >
                Here's what's happening in your workspace today.
              </p>
            </div>
          </div>

          {/* STATS GRID */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-6
            "
          >
            {/* MY TASKS / EMPLOYEES */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                border
              "
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">
                    {isAdmin ? "Employees" : "My Tasks"}
                  </p>

                  <h2
                    className="
                      text-4xl
                      font-bold
                      mt-3
                    "
                  >
                    {isAdmin ? stats?.employees || 0 : stats?.my_tasks || 0}
                  </h2>
                </div>

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-violet-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Users
                    className="
                      text-violet-600
                    "
                  />
                </div>
              </div>
            </div>

            {/* COMPLETED TASKS */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                border
              "
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">Completed Tasks</p>

                  <h2
                    className="
                      text-4xl
                      font-bold
                      mt-3
                    "
                  >
                    {stats?.completed_tasks || 0}
                  </h2>
                </div>

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-green-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <CheckCircle2
                    className="
                      text-green-600
                    "
                  />
                </div>
              </div>
            </div>

            {/* PENDING TASKS */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                border
              "
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">Pending Tasks</p>

                  <h2
                    className="
                      text-4xl
                      font-bold
                      mt-3
                    "
                  >
                    {stats?.pending_tasks || 0}
                  </h2>
                </div>

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Clock3
                    className="
                      text-orange-600
                    "
                  />
                </div>
              </div>
            </div>

            {/* NOTIFICATIONS */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                border
              "
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">Notifications</p>

                  <h2
                    className="
                      text-4xl
                      font-bold
                      mt-3
                    "
                  >
                    {stats?.unread_notifications || 0}
                  </h2>
                </div>

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Bell
                    className="
                      text-blue-600
                    "
                  />
                </div>
              </div>
            </div>

            {/* REQUIREMENTS */}
            {isAdmin && (
              <div
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-sm
                  border
                "
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500">Requirements</p>

                    <h2
                      className="
                        text-4xl
                        font-bold
                        mt-3
                      "
                    >
                      {stats?.requirements || 0}
                    </h2>
                  </div>

                  <div
                    className="
                      w-12
                      h-12
                      rounded-2xl
                      bg-pink-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <BriefcaseBusiness
                      className="
                        text-pink-600
                      "
                    />
                  </div>
                </div>
              </div>
            )}

            {/* AVERAGE RATING */}
            {isAdmin && (
              <div
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-sm
                  border
                "
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500">Average Rating</p>

                    <h2
                      className="
                        text-4xl
                        font-bold
                        mt-3
                      "
                    >
                      {stats?.average_rating || "N/A"}
                    </h2>
                  </div>

                  <div
                    className="
                      w-12
                      h-12
                      rounded-2xl
                      bg-yellow-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Star
                      className="
                        text-yellow-500
                      "
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CHART SECTION */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-6
            "
          >
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                border
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-6
                "
              >
                <h2
                  className="
                    text-xl
                    font-semibold
                  "
                >
                  Tasks by Status
                </h2>
              </div>

              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div
                className="
                  flex
                  justify-center
                  gap-8
                  mt-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <div
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-green-500
                    "
                  />

                  <p className="text-sm">Completed</p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <div
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-yellow-500
                    "
                  />

                  <p className="text-sm">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
