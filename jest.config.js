module.exports = {
	roots: ['<rootDir>/'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	coverageDirectory: 'coverage',
	testPathIgnorePatterns: [
		"/node_modules"
	],
	verbose: true,
	transform: {
		"^.+\\.ts?$": "ts-jest"
	},
	coverageReporters: ["text", 'html'],
	extensionsToTreatAsEsm: [".ts", ".test.ts"]
	/*coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	}*/
}