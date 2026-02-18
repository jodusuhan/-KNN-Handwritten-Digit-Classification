import { Brain, Ruler, Target, TrendingUp } from 'lucide-react';

export default function KNNConcepts() {
  const concepts = [
    {
      icon: Brain,
      title: 'What is KNN?',
      description:
        'K-Nearest Neighbors is a simple, distance-based classification algorithm. It predicts the class of a data point by looking at the K closest training examples.',
    },
    {
      icon: Ruler,
      title: 'Distance Metrics',
      description:
        'KNN uses distance calculations (typically Euclidean distance) to find the nearest neighbors. The shorter the distance, the more similar the data points.',
    },
    {
      icon: Target,
      title: 'Choosing K',
      description:
        'K is a hyperparameter that determines how many neighbors to consider. Small K can lead to overfitting, while large K can lead to underfitting. Optimal K is found through experimentation.',
    },
    {
      icon: TrendingUp,
      title: 'Feature Scaling',
      description:
        'Since KNN relies on distances, features must be scaled to the same range. Otherwise, features with larger values will dominate the distance calculation.',
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding KNN</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {concepts.map((concept, index) => {
          const Icon = concept.icon;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{concept.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{concept.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
