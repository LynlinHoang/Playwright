const { test, expect } = require('@playwright/test');

test('Kiểm tra tạo mới category thất bại do thiếu dữ liệu', async ({ page }) => {

  await page.goto('https://localhost:44309/Admin/Category/Create');

  await page.fill('input[name="Name"]', '');

  await page.fill('input[name="DisplayOrder"]', '');

  await page.click('button[type="submit"]');

  const nameError = page.locator('span[data-valmsg-for="Name"]');
  await expect(nameError).toHaveText('The Category Name field is required.');

  const displayOrderError = page.locator('span[data-valmsg-for="DisplayOrder"]');
  await expect(displayOrderError).toHaveText('The Display Order field is required.');


});
