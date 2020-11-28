const R = requireNode('ramda');

const parseResults = R.pipe(
  R.replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF0-9",{}.\[\]:-]/g, ''),
  JSON.parse
);

export default parseResults;
