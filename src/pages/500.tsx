import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-red-500">500 - Server Error</h1>
      <p className="text-xl text-center mb-8">
        We're sorry, but something went wrong on our end.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
} 