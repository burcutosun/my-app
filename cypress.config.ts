import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'u4ayz3',
  e2e: {
    baseUrl: 'http://localhost:4174',
    supportFile: false,
    excludeSpecPattern: ['*/*/**/screenshot.cy.ts'],
  },
});
