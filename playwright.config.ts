import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200',
    timeout: 120 * 1000
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    // This is the default junit path
    ['junit', { outputFile: 'artifacts/tests/junit-test-results.xml' }],
    ['html', { outputFolder: 'artifacts/tests/html' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'http://localhost:4200',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Capture screenshot after each test failure. */
    screenshot: 'only-on-failure',
    /* Record video only when retrying a test for the first time. */
    // video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        headless: true
      },
    },
  ],
};

export default config;
