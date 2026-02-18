import { KNNResult, DigitSample } from '../types';

export const knnResults: KNNResult[] = [
  { k: 1, accuracy: 0.9889 },
  { k: 3, accuracy: 0.9861 },
  { k: 5, accuracy: 0.9833 },
  { k: 7, accuracy: 0.9806 },
  { k: 9, accuracy: 0.9778 },
  { k: 11, accuracy: 0.9750 },
  { k: 13, accuracy: 0.9722 },
];

export const confusionMatrix = [
  [33, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 28, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 33, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 33, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 45, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 46, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 35, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 33, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 29, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 39],
];

export const sampleDigits: DigitSample[] = [
  {
    image: [0,0,5,13,9,1,0,0,0,0,13,15,10,15,5,0,0,3,15,2,0,11,8,0,0,4,12,0,0,8,8,0,0,5,8,0,0,9,8,0,0,4,11,0,1,12,7,0,0,2,14,5,10,12,0,0,0,0,6,13,10,0,0,0],
    actualLabel: 0,
    predictedLabel: 0,
  },
  {
    image: [0,0,0,12,13,5,0,0,0,0,0,11,16,9,0,0,0,0,3,15,16,6,0,0,0,7,15,16,16,2,0,0,0,0,1,16,16,3,0,0,0,0,1,16,16,6,0,0,0,0,1,16,16,6,0,0,0,0,0,11,16,10,0,0],
    actualLabel: 1,
    predictedLabel: 1,
  },
  {
    image: [0,0,0,4,15,12,0,0,0,0,3,16,15,14,0,0,0,0,8,13,8,16,0,0,0,0,1,6,15,11,0,0,0,1,8,13,15,1,0,0,0,9,16,16,5,0,0,0,0,3,13,16,16,11,5,0,0,0,0,3,11,16,9,0],
    actualLabel: 2,
    predictedLabel: 2,
  },
  {
    image: [0,0,7,15,13,1,0,0,0,8,13,6,15,4,0,0,0,2,1,13,13,0,0,0,0,0,2,15,11,1,0,0,0,0,0,0,12,7,0,0,0,0,0,0,12,7,0,0,0,0,0,6,14,7,0,0,0,0,10,16,15,9,0,0],
    actualLabel: 3,
    predictedLabel: 3,
  },
  {
    image: [0,0,0,1,11,0,0,0,0,0,0,7,8,0,0,0,0,0,1,13,6,2,2,0,0,0,7,15,0,9,8,0,0,5,16,10,0,16,6,0,0,4,15,16,13,16,1,0,0,0,0,3,15,10,0,0,0,0,0,2,16,4,0,0],
    actualLabel: 4,
    predictedLabel: 4,
  },
];

export const interviewQuestions = [
  {
    question: 'What is K in KNN?',
    answer: 'K is the number of nearest neighbors to consider when making a prediction. It determines how many closest data points influence the classification decision.',
    options: [
      'The number of nearest neighbors to consider',
      'The number of features in the dataset',
      'The number of classes in the target variable',
      'The distance metric used',
    ],
    correctIndex: 0,
  },
  {
    question: 'Why is scaling required for KNN?',
    answer: 'KNN uses distance calculations to find nearest neighbors. Features with larger ranges can dominate the distance calculation, leading to biased results. Scaling ensures all features contribute equally.',
    options: [
      'To speed up the algorithm',
      'To ensure features contribute equally to distance calculations',
      'To reduce memory usage',
      'To improve visualization',
    ],
    correctIndex: 1,
  },
  {
    question: 'What is Euclidean distance?',
    answer: 'Euclidean distance is the straight-line distance between two points in space. For two points (x1,y1) and (x2,y2), it is calculated as sqrt((x2-x1)² + (y2-y1)²).',
    options: [
      'The sum of absolute differences',
      'The straight-line distance between two points',
      'The maximum difference between coordinates',
      'The angle between two vectors',
    ],
    correctIndex: 1,
  },
  {
    question: 'What happens if K is too low?',
    answer: 'If K is too low (especially K=1), the model becomes sensitive to noise and outliers, leading to overfitting. The decision boundary becomes too complex and the model may not generalize well to new data.',
    options: [
      'The model becomes too simple',
      'The model becomes sensitive to noise and overfits',
      'The model becomes too slow',
      'The model accuracy always improves',
    ],
    correctIndex: 1,
  },
  {
    question: 'What are limitations of KNN?',
    answer: 'KNN is computationally expensive for large datasets, sensitive to feature scaling, struggles with high-dimensional data (curse of dimensionality), requires choosing K manually, and needs to store all training data.',
    options: [
      'Cannot handle classification problems',
      'Always requires exactly 3 neighbors',
      'Computationally expensive and sensitive to feature scaling',
      'Only works with binary classification',
    ],
    correctIndex: 2,
  },
];
