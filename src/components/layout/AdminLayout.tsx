import Link from "next/link";

export default function AdminLayout({ children }: any) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Orthocare</h2>

        <nav className="space-y-3">
          <Link href="/dashboard" className="block hover:text-gray-300">
            Dashboard
          </Link>
          <Link href="/patients" className="block hover:text-gray-300">
            Patients
          </Link>
          <Link href="/appointments" className="block hover:text-gray-300">
            Appointments
          </Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
}