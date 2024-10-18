// Importing the Image component from Next.js for optimized image handling
import Image from "next/image";

// Defining the default export function for the Home component
export default function Home() {
  // Returning the JSX structure for the Home component
  return (
    // Main container with a grid layout and responsive design
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main content area */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Next.js logo image */}
        <Image
          className="dark:invert" // Class for dark mode inversion
          src="https://nextjs.org/icons/next.svg" // Source URL for the image
          alt="Next.js logo" // Alt text for accessibility
          width={180} // Width of the image
          height={38} // Height of the image
          priority // Indicates that this image should be prioritized for loading
        />
        {/* Ordered list of instructions */}
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Container for action buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* Button to deploy the app on Vercel */}
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" // Link to Vercel deployment
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security feature for external links
          >
            {/* Vercel logo image */}
            <Image
              className="dark:invert" // Class for dark mode inversion
              src="https://nextjs.org/icons/vercel.svg" // Source URL for the image
              alt="Vercel logomark" // Alt text for accessibility
              width={20} // Width of the image
              height={20} // Height of the image
            />
            Deploy now
          </a>
          {/* Button to read the documentation */}
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" // Link to Next.js documentation
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security feature for external links
          >
            Read our docs
          </a>
        </div>
      </main>
      {/* Footer section with additional links */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Link to Next.js learning resources */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" // Link to learning resources
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security feature for external links
        >
          {/* File icon image */}
          <Image
            aria-hidden // Indicates that this image is decorative
            src="https://nextjs.org/icons/file.svg" // Source URL for the image
            alt="File icon" // Alt text for accessibility
            width={16} // Width of the image
            height={16} // Height of the image
          />
          Learn
        </a>
        {/* Link to Vercel templates */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" // Link to Vercel templates
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security feature for external links
        >
          {/* Window icon image */}
          <Image
            aria-hidden // Indicates that this image is decorative
            src="https://nextjs.org/icons/window.svg" // Source URL for the image
            alt="Window icon" // Alt text for accessibility
            width={16} // Width of the image
            height={16} // Height of the image
          />
          Examples
        </a>
        {/* Link to the main Next.js website */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" // Link to Next.js website
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security feature for external links
        >
          {/* Globe icon image */}
          <Image
            aria-hidden // Indicates that this image is decorative
            src="https://nextjs.org/icons/globe.svg" // Source URL for the image
            alt="Globe icon" // Alt text for accessibility
            width={16} // Width of the image
            height={16} // Height of the image
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}