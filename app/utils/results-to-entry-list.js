const R = requireNode('ramda');

const addReversePosition = (length) => (v, idx) =>
  R.assoc('defaultGridPosition', length - idx, v);

const resultsToInvertedGrid = R.pipe(
  R.path(['sessionResult', 'leaderBoardLines']),
  R.pluck('currentDriver'),
  R.map(R.assoc('driverCategory', 1)),
  R.converge(R.addIndex(R.map), [
    R.pipe(R.length, addReversePosition),
    R.identity
  ]),
  R.map(R.objOf('drivers')),
  R.objOf('entries')
);

export default resultsToInvertedGrid;
