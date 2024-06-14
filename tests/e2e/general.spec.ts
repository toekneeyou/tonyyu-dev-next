import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("general", () => {
  // test("can open and close side menu", async ({ page }) => {});
});
