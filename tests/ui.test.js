const {test, expect} = require("@playwright/test");
const url = "http://localhost:3000";

// test("Verify All Books link is visible", async ( {page} ) => {
//     await page.goto(url);
//     await page.waitForSelector('nav.navbar');
//     const allBooksLink = await page.$('a[href="/catalog"]');
//     const isLinkVisible = await allBooksLink.isVisible();
//     expect(isLinkVisible).toBe(true);
// });

test("Verify Login button is visible", async ( {page} ) => {
    await page.goto(url);
    await page.waitForSelector('nav.navbar');
    const loginButton = await page.$('a[href="/login"]');
    const isLinkVisible = await loginButton.isVisible();
    expect(isLinkVisible).toBe(true);
});

// test("Verify Register button is visible", async ( {page} ) => {
//     await page.goto(url);
//     await page.waitForSelector('nav.navbar');
//     const registerLink = await page.$('a[href="/register"]');
//     const registerLinkText = await registerLink.textContent();    
//     expect(registerLinkText).toEqual("Register");
// });

// test("Verify All Books link is visible after login", async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.click('input[type="submit"]');
//     const allBooksLink = await page.$('a[href="/catalog"]');
//     const isAllBooksLinkVisible = await allBooksLink.isVisible();
//     expect(isAllBooksLinkVisible).toBe(true);
// });

// test('Verify That the "My Books" Link Is Visible', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.click('input[type="submit"]');
//     const myBooksButton = await page.$('a[href="/profile"]');
//     const isMyBooksButtonVisible = await myBooksButton.isVisible();
//     expect(isMyBooksButtonVisible).toBe(true);
// });

// test('Verify That the "Add Book" Link Is Visible', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.click('input[type="submit"]');
//     const addBooksButton = await page.$('a[href="/create"]');
//     const isAddBooksButtonVisible = await addBooksButton.isVisible();
//     expect(isAddBooksButtonVisible).toBe(true);
// });

// test('Verify That the "Users Email" Address Is Visible', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.click('input[type="submit"]');
//     const userEmail = await page.$('#user > span');
//     const userEmailText = await userEmail.textContent();
//     expect(userEmailText).toContain('@');
// });

// test('Login with valid credentials', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.click('input[type="submit"]');
//     await page.$('a[href="/catalog"]');
//     expect(page.url()).toBe('http://localhost:3000/catalog');
// });

// test('Login with empty credentials', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.click('input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain('All fields are required!');
//         await dialog.accept();
//     })
//     await page.$('a[href="/login"]');
//     expect(page.url()).toBe('http://localhost:3000/login');
// });

// test('Login with empty email', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="password"]', '123');
//     await page.click('input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain('All fields are required!');
//         await dialog.accept();
//     })
//     await page.$('a[href="/login"]');
//     expect(page.url()).toBe('http://localhost:3000/login');
// });

// test('Login with empty password', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.click('input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain('All fields are required!');
//         await dialog.accept();
//     })
//     await page.$('a[href="/login"]');
//     expect(page.url()).toBe('http://localhost:3000/login');
// });




// test('Register with valid credentials', async ( {page} ) => {
//     await page.goto(url + '/register');
//     await page.fill('input[name="email"]', 'mail' + Math.random() + '@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.fill('input[name="confirm-pass"]', '123');
//     await page.click('input[type="submit"]');
//     await page.$('a[href="/catalog"]');
//     expect(page.url()).toBe('http://localhost:3000/catalog');
// });

// test('Register with empty credentials', async ( {page} ) => {
//     await page.goto(url + '/register');
//     await page.click('input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain('All fields are required!');
//         await dialog.accept();
//     })
//     await page.$('a[href="/register"]');
//     expect(page.url()).toBe('http://localhost:3000/register');
// });

// test('Register with empty email', async ( {page} ) => {
//     await page.goto(url + '/register');
//     await page.fill('input[name="password"]', '123');
//     await page.fill('input[name="confirm-pass"]', '123');
//     await page.click('input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain('All fields are required!');
//         await dialog.accept();
//     })
//     await page.$('a[href="/register"]');
//     expect(page.url()).toBe('http://localhost:3000/register');
// });

// test('Register with empty password', async ( {page} ) => {
//     await page.goto(url + '/register');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="confirm-pass"]', '123');
//     await page.click('input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain('All fields are required!');
//         await dialog.accept();
//     })
//     await page.$('a[href="/register"]');
//     expect(page.url()).toBe('http://localhost:3000/register');
// });

// test('Register with empty confirm password', async ( {page} ) => {
//     await page.goto(url + '/register');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.click('input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain('All fields are required!');
//         await dialog.accept();
//     })
//     await page.$('a[href="/register"]');
//     expect(page.url()).toBe('http://localhost:3000/register');
// });

// test('Register with different confirm password', async ( {page} ) => {
//     await page.goto(url + '/register');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.fill('input[name="confirm-pass"]', '1234');
//     await page.click('input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain("Passwords don't match!");
//         await dialog.accept();
//     })
//     await page.$('a[href="/register"]');
//     expect(page.url()).toBe('http://localhost:3000/register');
// });

// test('Add book with correct data', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);
//     await page.click('a[href="/create"]');
//     await page.waitForSelector('#create-form');
//     await page.fill('#title', 'Test book');
//     await page.fill('#description', 'This is a test description');
//     await page.fill('#image', 'https://example.com/book-image.jpg');
//     await page.selectOption('#type', 'Fiction');
//     await page.click('#create-form input[type="submit"]');
//     await page.waitForURL('http://localhost:3000/catalog');
//     expect(page.url()).toBe('http://localhost:3000/catalog');
// });

// test('Add book with empty title field', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);
//     await page.click('a[href="/create"]');
//     await page.waitForSelector('#create-form');
//     await page.fill('#description', 'This is a test description');
//     await page.fill('#image', 'https://example.com/book-image.jpg');
//     await page.selectOption('#type', 'Fiction');
//     await page.click('#create-form input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain("All fields are required!");
//         await dialog.accept();
//     })
//     await page.$('a[href="/create"]');
//     expect(page.url()).toBe('http://localhost:3000/create');
// });

// test('Add book with empty description field', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);
//     await page.click('a[href="/create"]');
//     await page.waitForSelector('#create-form');
//     await page.fill('#title', 'Test book');
//     await page.fill('#image', 'https://example.com/book-image.jpg');
//     await page.selectOption('#type', 'Fiction');
//     await page.click('#create-form input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain("All fields are required!");
//         await dialog.accept();
//     })
//     await page.$('a[href="/create"]');
//     expect(page.url()).toBe('http://localhost:3000/create');
// });

// test('Add book with empty url field', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);
//     await page.click('a[href="/create"]');
//     await page.waitForSelector('#create-form');
//     await page.fill('#title', 'Test book');
//     await page.fill('#description', 'This is a test description');
//     await page.selectOption('#type', 'Fiction');
//     await page.click('#create-form input[type="submit"]');
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain("All fields are required!");
//         await dialog.accept();
//     })
//     await page.$('a[href="/create"]');
//     expect(page.url()).toBe('http://localhost:3000/create');
// });

// test('Login and verify all books are displayed', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);
//     await page.waitForSelector('.dashboard');
//     const bookElements = await page.$$('.other-books-list li');
//     expect(bookElements.length).toBeGreaterThan(0);
// });

// test('Login and verify no books are displayed', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);
//     await page.waitForSelector('.dashboard');
//     const noBooksMessage = await page.textContent('.no-books');
//     expect(noBooksMessage).toBe('No books in database!');
// });

// test('Login and navigate to Details page', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);
//     await page.click('a[href="/catalog"]');
//     await page.waitForSelector('.otherBooks');
//     await page.click('.otherBooks a.button');
//     await page.waitForSelector('.book-information');
//     const detailsPageTitle = await page.textContent('.book-information h3');
//     expect(detailsPageTitle).toBe('Test book');
// });

// test('Navigate to Details page with guest user', async ( {page} ) => {
//     await page.goto(url);
//     await page.click('a[href="/catalog"]');
//     await page.waitForSelector('.otherBooks');
//     await page.click('.otherBooks a.button');
//     await page.waitForSelector('.book-information');
//     const detailsPageTitle = await page.textContent('.book-information h3');
//     expect(detailsPageTitle).toBe('Test book');
// });

// test('Verify That All Book Info Is Displayed Correctly', async ( {page} ) => {
//     await page.goto(url);
//     await page.click('a[href="/catalog"]');
//     await page.waitForSelector('.otherBooks');
//     await page.click('.otherBooks a.button');
//     await page.waitForSelector('.book-information');
//     const detailsPageTitle = await page.textContent('.book-information h3');
//     expect(detailsPageTitle).toBe('Test book');

//     const detailsPageType = await page.textContent('.type');
//     expect(detailsPageType).toContain('Fiction');

//     const detailsPageDescription = await page.textContent('.book-description p');
//     expect(detailsPageDescription).toContain('This is a test description');

//     const detailsPageLikes = await page.textContent('#total-likes');
//     expect(detailsPageLikes).toContain('0');
// });

// test('Verify If Edit and Delete Buttons Are Visible for Creator', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'peter@abv.bg');
//     await page.fill('input[name="password"]', '123456');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);    
//     await page.waitForSelector('.otherBooks');    
//     await page.click('a[href="/details/2949b54d-b163-4a00-b65c-41fb8b641561"]');
//     await page.waitForSelector('.book-information');
//     const editButton = await page.$('a[href="/edit/2949b54d-b163-4a00-b65c-41fb8b641561"]');
//     expect(await editButton.isVisible()).toBe(true);
//     const deleteButton = await page.$('a[href="javascript:void(0)"]');
//     expect(await deleteButton.isVisible()).toBe(true);
// });

// test('Verify If Edit and Delete Buttons Are Visible for Not Creator', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);    
//     await page.waitForSelector('.otherBooks');    
//     await page.click('a[href="/details/2949b54d-b163-4a00-b65c-41fb8b641561"]');
//     await page.waitForSelector('.book-information');
//     expect(await page.locator('a[href="/edit/2949b54d-b163-4a00-b65c-41fb8b641561"]').count()).toEqual(0);
//     expect(await page.getByText('Delete').count()).toEqual(0);
// });

// test('Verify If Like Button Is Visible for Non-Creator', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');    
//     await Promise.all([
//         page.click('input[type="submit"]'),
//         page.waitForURL('http://localhost:3000/catalog') 
//     ]);    
//     await page.waitForSelector('.otherBooks');    
//     await page.click('a[href="/details/2949b54d-b163-4a00-b65c-41fb8b641561"]');
//     await page.waitForSelector('.book-information');
//     const likeButton = await page.locator('//a[@class="button" and text()="Like"]');
//     expect(await likeButton.isVisible()).toBe(true);
// });

// test('Verify That the "Logout" Button Is Visible', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.click('input[type="submit"]');
//     const logoutButton = await page.$('#logoutBtn');
//     const isLogoutButtonVisible = await logoutButton.isVisible();
//     expect(isLogoutButtonVisible).toBe(true);
// });

// test('Verify That the "Logout" Button Redirects Correctly', async ( {page} ) => {
//     await page.goto(url + '/login');
//     await page.fill('input[name="email"]', 'mail@abv.bg');
//     await page.fill('input[name="password"]', '123');
//     await page.click('input[type="submit"]');
//     const logoutButton = await page.$('#logoutBtn');
//     await logoutButton.click();
//     expect(page.url()).toBe(url + '/catalog');
// });