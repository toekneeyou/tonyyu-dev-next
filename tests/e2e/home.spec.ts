import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("hero", () => {
  test("can download resume", async ({ page }) => {
    // Wait for download before clicking
    const downloadPromise = page.waitForEvent("download");
    // Click on resume anchor element
    await page.locator("css=.resume-link").click();
    // Check for failure
    const resumeDownload = await downloadPromise;
    const isFailed = await resumeDownload.failure();
    expect(isFailed).toBeNull();
  });
});

test.describe("projects", () => {
  test("can select project for display", () => {});
});
