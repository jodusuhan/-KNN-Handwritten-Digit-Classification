import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-8 h-8" />
          <div>
            <h1 className="text-3xl font-bold">Digit Classification Learning Tool</h1>
            <p className="text-blue-100 mt-1">Master K-Nearest Neighbors Algorithm</p>
          </div>
        </div>
      </div>
    </header>
  );
}
