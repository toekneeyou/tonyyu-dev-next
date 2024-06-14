import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/blog");
});

test.describe("Blog Page", () => {
  //   test("has title", async ({ page }) => {
  //     await expect(page).toHaveTitle(/Tony Yu - Blog/);
  //   });
  //   test("blog links are valid", async ({ page }) => {});
  //   test("can search for blog posts", async ({ page }) => {});
  //   test("can filter blog posts", async ({ page }) => {});
  //   test("can paginate blog posts", async ({ page }) => {});
});
