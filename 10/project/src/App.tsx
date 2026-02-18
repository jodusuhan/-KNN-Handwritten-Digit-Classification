import Header from './components/Header';
import KNNConcepts from './components/KNNConcepts';
import AccuracyChart from './components/AccuracyChart';
import ConfusionMatrix from './components/ConfusionMatrix';
import SampleDigits from './components/SampleDigits';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <main className="container mx-auto px-6 py-12 space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Learn Classification Through Interactive Examples
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how the K-Nearest Neighbors algorithm classifies handwritten digits. Understand key
            concepts, visualize results, and test your knowledge.
          </p>
        </div>

        <div id="concepts">
          <KNNConcepts />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div id="accuracy">
            <AccuracyChart />
          </div>
          <div id="confusion">
            <ConfusionMatrix />
          </div>
        </div>

        <div id="samples">
          <SampleDigits />
        </div>

        <div id="quiz">
          <Quiz />
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Now that you understand the concepts, try implementing KNN yourself using Python and
            scikit-learn. Load the digits dataset, experiment with different K values, and compare your
            results with what you've learned here.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-2">Step 1: Load Data</div>
              <div className="text-blue-100">from sklearn.datasets import load_digits</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-2">Step 2: Scale Features</div>
              <div className="text-blue-100">from sklearn.preprocessing import StandardScaler</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-2">Step 3: Train Model</div>
              <div className="text-blue-100">from sklearn.neighbors import KNeighborsClassifier</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
