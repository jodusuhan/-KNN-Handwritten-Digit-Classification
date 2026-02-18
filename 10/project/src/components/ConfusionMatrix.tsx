import { confusionMatrix } from '../data/knnData';
import { Grid3x3 } from 'lucide-react';

export default function ConfusionMatrix() {
  const maxValue = Math.max(...confusionMatrix.flat());

  const getColor = (value: number) => {
    if (value === 0) return 'bg-gray-50 text-gray-400';
    const intensity = Math.min(Math.floor((value / maxValue) * 5), 5);
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-blue-200 text-blue-900',
      'bg-blue-400 text-white',
      'bg-blue-500 text-white',
      'bg-blue-600 text-white',
      'bg-blue-700 text-white',
    ];
    return colors[intensity];
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Grid3x3 className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Confusion Matrix</h2>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 leading-relaxed">
          The confusion matrix shows how well the model predicts each digit. Diagonal values (dark blue)
          represent correct predictions, while off-diagonal values show misclassifications.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="flex items-center mb-2">
            <div className="w-16"></div>
            <div className="flex-1 text-center">
              <p className="text-sm font-semibold text-gray-600 mb-2">Predicted Label</p>
              <div className="flex justify-center">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <div key={num} className="w-12 text-center text-sm font-semibold text-gray-700">
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col justify-center items-end pr-4">
              <p className="text-sm font-semibold text-gray-600 mb-2 -rotate-90 w-16">Actual Label</p>
            </div>

            <div className="flex-1">
              {confusionMatrix.map((row, i) => (
                <div key={i} className="flex items-center mb-1">
                  <div className="w-8 text-right pr-2 text-sm font-semibold text-gray-700">{i}</div>
                  <div className="flex">
                    {row.map((value, j) => (
                      <div
                        key={j}
                        className={`w-12 h-12 flex items-center justify-center text-sm font-semibold ${getColor(value)} border border-white transition-transform hover:scale-110`}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm text-green-800">
          <span className="font-semibold">Total Predictions:</span>{' '}
          {confusionMatrix.flat().reduce((a, b) => a + b, 0)} |{' '}
          <span className="font-semibold">Correct:</span>{' '}
          {confusionMatrix.reduce((sum, row, i) => sum + row[i], 0)}
        </p>
      </div>
    </section>
  );
}
