// Importing the Image component from Next.js for optimized image handling
import Image from "next/image";
import Card from "./Card"; // Importing the Card component
import Navbar from './Navbar';

// Defining the default export function for the Home component
export default function Home() {
  const recipes = [
    {
      title: "Recipe 1",
      description: "Short description of Recipe 1.",
      imageUrl: "https://i.ytimg.com/vi/iOsIC6JeFTg/sddefault.jpg", // Placeholder image
    },
    {
      title: "Recipe 2",
      description: "Short description of Recipe 2.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9G6SrRxnew4Uvy2yKEQVllKGys76lPKxG0Q&s",
    },
    {
      title: "Recipe 3",
      description: "Short description of Recipe 3.",
      imageUrl: "https://simple-veganista.com/wp-content/uploads/2016/04/homemade-acai-bowl-7.jpg",
    },
    {
      title: "Recipe 4",
      description: "Short description of Recipe 4.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhZivwlPWXNUF0JnqJyEDExTeg4-YXZfxQQ&s",
    },
  ];
  // Returning the JSX structure for the Home component

  return (
    // Main container with a grid layout and responsive design
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-0 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)">
      {/* Main content area */}
      <Navbar /> {/* Move Navbar outside the grid */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          {/* Other components like Card go here */}
        </div>
      </main>
      {/* Recipe Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {recipes.map((recipe, index) => (
          <Card
            key={index}
            title={recipe.title}
            description={recipe.description}
            imageUrl={recipe.imageUrl}
          />
        ))}
      </div> 
      {/* Footer section with additional links */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                        
      </footer>
    </div>
  );
}
