import Sidebar from "./Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-97px)] pt-16 md:pt-0 bg-gray-100">

            <Sidebar />

            <main className="flex-1 p-6 bg-gray-100 ">

                {children}

            </main>

        </div>
    )
}