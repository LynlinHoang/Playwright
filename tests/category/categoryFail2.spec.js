const { test, expect } = require('@playwright/test');

test('Kiểm tra tạo mới category thất bại do Display Order sai dữ liệu', async ({ page }) => {

  await page.goto('https://localhost:44309/Admin/Category/Create');

  await page.fill('input[name="Name"]', 'Category Test');

  await page.fill('input[name="DisplayOrder"]', '150');

  await page.click('button[type="submit"]');

  const displayOrderError = page.locator('span[data-valmsg-for="DisplayOrder"]');
  await expect(displayOrderError).toHaveText('Display Order must be between 1-100.');
});
