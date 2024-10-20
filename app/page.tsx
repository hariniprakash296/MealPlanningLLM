// Importing the Image component from Next.js for optimized image handling
import Image from "next/image";
import Card from "./Card"; // Importing the Card component
import Navbar from "./Navbar"; // Importing the Navbar component
import Calendar from './Calendar';
import MainLayout from './MainLayout'; // Importing the Navbar component

// Defining the default export function for the Home component
export default function Home() {
  return (
    <div className="bg-light-cream p-4 rounded-lg mt-16">
      <Navbar />
      <MainLayout />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">

        </div>
      </main>
    </div>
  );
}
