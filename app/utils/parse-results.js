const R = requireNode('ramda');

const parseResults = R.pipe(
  R.replace(/[^a-zA-Z0-9",{}.\[\]:-]/g, ''),
  JSON.parse
)

export default parseResults;
