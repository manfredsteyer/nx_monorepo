module.exports = {
  name: 'passenger-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/passenger-api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
