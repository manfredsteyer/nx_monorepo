module.exports = {
  name: 'flight-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/flight-api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
