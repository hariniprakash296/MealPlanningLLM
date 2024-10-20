import React from 'react';
import Navbar from './Navbar';

// Define the CardProps interface
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Card component definition
const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const MainLayout: React.FC = () => {
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

  return (
    <div className="bg-light-cream p-4 rounded-lg mt-16">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {recipes.map((recipe, index) => (
          <Card
            key={index}
            title={recipe.title}
            description={recipe.description}
            imageUrl={recipe.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MainLayout;
