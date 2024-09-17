const { test, expect } = require('@playwright/test');

test('Kiểm tra tạo mới category thất bại do Category Name dữ liệu null', async ({ page }) => {

  await page.goto('https://localhost:44309/Admin/Category/Create');

  await page.fill('input[name="Name"]', '');

  await page.fill('input[name="DisplayOrder"]', '100');

  await page.click('button[type="submit"]');

  const nameError = page.locator('span[data-valmsg-for="Name"]');
  
  await expect(nameError).toHaveText('The Category Name field is required.');
});
