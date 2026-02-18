import { knnResults } from '../data/knnData';
import { BarChart3 } from 'lucide-react';

export default function AccuracyChart() {
  const maxAccuracy = Math.max(...knnResults.map((r) => r.accuracy));
  const minAccuracy = Math.min(...knnResults.map((r) => r.accuracy));
  const range = maxAccuracy - minAccuracy;

  return (
    <section className="bg-white rounded-xl shadow-md p-8">
      <div className="flex items-center space-x-3 mb-6">
        <BarChart3 className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Accuracy vs K Value</h2>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 leading-relaxed">
          This chart shows how model accuracy changes with different K values. Lower K values tend to
          overfit, while higher K values may underfit. The optimal K balances bias and variance.
        </p>
      </div>

      <div className="space-y-4">
        {knnResults.map((result) => {
          const heightPercent = range > 0 ? ((result.accuracy - minAccuracy) / range) * 100 : 100;
          const normalizedHeight = 20 + heightPercent * 0.8;

          return (
            <div key={result.k} className="flex items-center space-x-4">
              <div className="w-16 text-right font-semibold text-gray-700">K = {result.k}</div>
              <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden h-12 relative">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full flex items-center justify-end px-4 transition-all duration-500"
                  style={{ width: `${normalizedHeight}%` }}
                >
                  <span className="text-white font-semibold">
                    {(result.accuracy * 100).toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Best K Value:</span> K = {knnResults[0].k} with accuracy of{' '}
          {(knnResults[0].accuracy * 100).toFixed(2)}%
        </p>
      </div>
    </section>
  );
}
