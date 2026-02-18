import { sampleDigits } from '../data/knnData';
import { Eye } from 'lucide-react';

export default function SampleDigits() {
  const renderDigit = (imageData: number[]) => {
    return (
      <div className="grid grid-cols-8 gap-px bg-gray-200 p-2 rounded">
        {imageData.map((pixel, idx) => {
          const intensity = Math.floor((pixel / 16) * 255);
          return (
            <div
              key={idx}
              className="aspect-square"
              style={{
                backgroundColor: `rgb(${intensity}, ${intensity}, ${intensity})`,
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Eye className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Sample Predictions</h2>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 leading-relaxed">
          Here are sample handwritten digits from the test set along with their actual and predicted
          labels. Each image is an 8x8 pixel representation of a handwritten digit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {sampleDigits.map((digit, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4">{renderDigit(digit.image)}</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Actual:</span>
                <span className="font-bold text-gray-800">{digit.actualLabel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Predicted:</span>
                <span
                  className={`font-bold ${
                    digit.actualLabel === digit.predictedLabel ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {digit.predictedLabel}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-200">
                {digit.actualLabel === digit.predictedLabel ? (
                  <span className="text-xs text-green-600 font-semibold">Correct</span>
                ) : (
                  <span className="text-xs text-red-600 font-semibold">Incorrect</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
