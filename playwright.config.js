// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 10000,
  },
  /* Run tests in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry tests on CI */
  retries: process.env.CI ? 2 : 0,
  /* Parallel workers */
  workers: process.env.CI ? 1 : undefined,
  /* Reporters to use */
  reporter: [
    ['list'],
    ['html'],
    ['json', { outputFile: 'test-results.json' }]
  ],  /* Global test settings */
  use: {
    /* Enable Model Context Protocol */
    mcp: {
      enabled: true,
      playwrightCLIPath: require.resolve('@playwright/test/cli')
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:3000',
    /* Take screenshot on failure */
    screenshot: 'only-on-failure',
    /* Record video for failed tests */
    video: 'retain-on-failure',
    /* Collect traces for failed tests */
    trace: 'retain-on-failure',
    /* Enable JavaScript stack traces */
    actionTimeout: 15000,
    navigationTimeout: 15000,
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
        headless: false,
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1280, height: 720 },
      },
    },
  ]
};

module.exports = config;