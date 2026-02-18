import { Github, BookOpen, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About This Tool</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              An interactive learning platform for understanding K-Nearest Neighbors algorithm through
              handwritten digit classification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Learning Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#concepts"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Understanding KNN</span>
                </a>
              </li>
              <li>
                <a
                  href="#accuracy"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Code className="w-4 h-4" />
                  <span>K Value Tuning</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Key Concepts</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Distance-based classification</li>
              <li>Feature scaling importance</li>
              <li>Hyperparameter tuning</li>
              <li>Model evaluation metrics</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>Built for students learning machine learning fundamentals</p>
        </div>
      </div>
    </footer>
  );
}
