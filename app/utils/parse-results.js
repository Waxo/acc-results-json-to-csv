const fs = requireNode('fs-extra');

const parseResults = (filename) => fs.readJson(filename, 'utf16le');

export default parseResults;
