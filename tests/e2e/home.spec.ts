import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("Home Page", () => {
  // test("has title", async ({ page }) => {
  //   await expect(page).toHaveTitle(/Tony Yu - Frontend Developer/);
  // });

  // test("links in hero are valid", async ({ page }) => {});

  test("can download resume", async ({ page }) => {
    const downloadPromise = page.waitForEvent("download");
    await page.locator("css=.resume-link").click();
    const resumeDownload = await downloadPromise;
    const isFailed = await resumeDownload.failure();
    expect(isFailed).toBeNull();
  });

  // test("can visit github from skills section", async ({ page }) => {});

  // test("abby links are valid", async ({ page }) => {});

  // test("blog links are valid", async ({ page }) => {});

  // test("can open and close side menu", async ({ page }) => {});
});
