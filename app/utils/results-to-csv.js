const R = requireNode('ramda');

import carModelToName from "./cars";

const columns = ['Place',
  'FirstName',
  'LastName',
  'Car Number',
  'Car',
  'Laps',
  'Best S1',
  'Best S2',
  'Best S3',
  'Best lap',
  'Ideal Best lap',
  'SteamId',
];

const formatTime = (lapTime) => `${Math.floor(
  Math.floor(lapTime * 0.001) / 60)}:${Math.floor(lapTime * 0.001) %
60}.${lapTime % 1000}`;

const addBestSplits = R.pipe(
  R.path(['timing', 'bestSplits']),
  R.map(formatTime)
);

const idealTime = R.pipe(
  R.path(['timing', 'bestSplits']),
  R.reduce(R.add, 0),
  formatTime
);

const formatDriver = (driver, index) => R.pipe(
  R.juxt([
    R.always(index + 1),
    R.path(['currentDriver', 'firstName']),
    R.path(['currentDriver', 'lastName']),
    R.path(['car', 'raceNumber']),
    R.pipe(R.path(['car', 'carModel']), carModelToName),
    R.path(['timing', 'lapCount']),
    addBestSplits,
    R.pipe(R.path(['timing', 'bestLap']), formatTime),
    idealTime,
    R.path(['currentDriver', 'playerId'])
  ]),
  R.flatten
)(driver);

const resultsToCSV = R.pipe(
  R.path(['sessionResult', 'leaderBoardLines']),
  R.addIndex(R.map)(formatDriver),
  R.prepend(columns),
  R.map(R.join(';')),
  R.join('\n')
)

export default resultsToCSV;
