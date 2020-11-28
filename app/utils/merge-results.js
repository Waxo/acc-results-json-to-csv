const R = requireNode('ramda');

const bestLap_ = R.path(['timing', 'bestLap']);

const mergeResults_ = (results) =>
  R.pipe(
    R.concat(R.path(['sessionResult', 'leaderBoardLines'], results)),
    R.sortBy(bestLap_),
    R.uniqBy(R.path(['currentDriver', 'playerId']))
  );

const mergeResults = R.curry((results, previousResults) =>
  R.over(
    R.lensPath(['sessionResult', 'leaderBoardLines']),
    mergeResults_(results)
  )(previousResults)
);

export default mergeResults;
