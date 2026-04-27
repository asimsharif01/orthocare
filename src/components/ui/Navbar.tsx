import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <h1 className="text-xl font-bold">OrthoCare</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/doctors">Doctors</Link>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Book Appointment
      </button>
    </div>
  );
}