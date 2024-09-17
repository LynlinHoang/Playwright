const { test, expect } = require('@playwright/test');

test('Kiểm tra tạo mới category thành công', async ({ page }) => {

  await page.goto('https://localhost:44309/Admin/Category/Create');

  await page.fill('input[name="Name"]', 'Test Category');

  await page.fill('input[name="DisplayOrder"]', '5');

  await page.click('button[type="submit"]');

  const newCategory = await page.locator('text=Test Category');
  await expect(newCategory).toBeVisible();
});
