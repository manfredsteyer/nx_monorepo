module.exports = {
  name: 'passenger-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/passenger-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
