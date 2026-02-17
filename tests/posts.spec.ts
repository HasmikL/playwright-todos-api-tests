import { test, expect } from '@playwright/test';

//test.describe ('JSONPlaceholder API Posts', async ()=>{

  // test('Get Request For Posts',async ({request})=>{

  //     const response = await request.get('https://jsonplaceholder.typicode.com/posts');

  //     expect(response.ok()).toBe(true);
  //     expect(response.status()).toBe(200);

  //     const posts = await response.json();

  //     expect(posts.length).toBe(100);
  //     expect(posts.length).toBeGreaterThan(0);

  //     for(let post of posts){
  //       expect(post).toHaveProperty('userId');
  //       expect(post).toHaveProperty('id');
  //       expect(post).toHaveProperty('title');
  //       expect(post).toHaveProperty('body');

  //     }  

  // });
  
  // test('Get Request Post for id1 ', async({request})=>{

  //     const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  //     expect(response.ok()).toBe(true);
  //     expect(response.status()).toBe(200);

  //     const post = await response.json();

  //     expect(post()).toHaveProperty('userId');
  //     expect(post()).toHaveProperty('id', 1);
  //     expect(post()).toHaveProperty('title');
  //     expect(post()).toHaveProperty('body');

  // });

  // test('Get Request Comments for postId 1 - with path params', async ({request})=>{

  //   const response = await request.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  //    expect(response.ok()).toBe(true);
  //    expect(response.ok()).toBeTruthy;
  //    expect(response.status()).toBe(200);

  //    const comments = await response.json();

  //    for (let comment of comments){
  //      expect(comment).toHaveProperty('postId', 1);
  //      expect(comment).toHaveProperty('id');
  //      expect(comment).toHaveProperty('name');
  //      expect(comment).toHaveProperty('email');
  //      expect(comment).toHaveProperty('body');

  //    }

  // });

  // test('Get Request Comments for postId1 - with query params', async({request})=>{

  //   const response = await request.get('https://jsonplaceholder.typicode.com/comments?postId=1');

  //   expect(response.ok()).toBe(true);
  //   expect(response.status()).toBe(200);

  //   const comments = await response.json();

  //   for(let comment of comments){
  //     expect(comment).toHaveProperty('postId', 1);
  //     expect(comment).toHaveProperty('id');
  //     expect(comment).toHaveProperty('email');
  //     expect(comment).toHaveProperty('body');
  //     expect(comment).toHaveProperty('email');
  //   }

  // });

//});

///////////////////////////////////////////////////////////////////////////////////////////

const postId = 1;

test.describe ('JSONPlaceholder API Posts', async ()=>{

  test('Get Request For Posts',async ({request})=>{

      const response = await request.get('https://jsonplaceholder.typicode.com/posts');

      expect(response.ok()).toBe(true);
      expect(response.status()).toBe(200);

      const posts = await response.json();

      expect(posts.length).toBe(100);
      expect(posts.length).toBeGreaterThan(0);

      for(let post of posts){
        expect(post).toHaveProperty('userId');
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');

      }  

  });
  
  test(`Get Request Post for ${postId}`, async ({ request }) => {

  const response = await request.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const post = await response.json();

  expect(post).toHaveProperty('userId');
  expect(post).toHaveProperty('id', postId);
  expect(post).toHaveProperty('title');
  expect(post).toHaveProperty('body');
});

  test(`Get Request Comments for ${postId} - with query params`, async ({ request }) => {

  const response = await request.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const comments = await response.json();

  expect(comments.length).toBeGreaterThan(0);

  for (const comment of comments) {
    expect(comment.postId).toBe(postId);
    expect(comment).toHaveProperty('id');
    expect(comment).toHaveProperty('email');
    expect(comment).toHaveProperty('body');
  }
  });

  });

  
  