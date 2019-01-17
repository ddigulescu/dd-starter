module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupTestFrameworkScriptFile: '<rootDir>/testSetup.js',
	moduleNameMapper: {
		'\\.css$': require.resolve('./__mocks__/styleMock.js')
	}
};
