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

let postId: number = 1;
 
const newPost = {
  userId: 1,
  title: "Hasmik",
  body: "Levonyan"
}

const updatedData = {
  userId: 1,
  title: "Hasmik",
  body: "JAN !!!"
};

const partialUpdatedData = {
   body: "HELLO !!!"
}

test.describe('JSONPlaceholder API Posts', async ()=>{

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

  test('POST create a new Post',async({request})=>{
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: newPost
    });

      expect(response.ok()).toBe(true);
      expect(response.status()).toBe(201);

      const data = await response.json();
      expect(data).toHaveProperty('id');
      expect(data).toHaveProperty('userId',newPost.userId);
      expect(data).toHaveProperty('title',newPost.title);
      expect(data).toHaveProperty('body',newPost.body);


  });

  test(`PUT update postID ${postId}`,async ({request})=>{

    const response = await request.put(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
      data: updatedData

    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data).toHaveProperty('id',postId);
    expect(data).toHaveProperty('userId',updatedData.userId);
    expect(data).toHaveProperty('title',updatedData.title);
    expect(data).toHaveProperty('body',updatedData.body);

  });
  
  test(`PATCH partial update PostID ${postId}`,async ({request})=>{

    const response = await request.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
      data: partialUpdatedData
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data).toHaveProperty('id',postId);
    expect(data).toHaveProperty('body',partialUpdatedData.body);

  });

  test(`DELETE post postID ${postId}`, async({request})=>{
      const response = await request.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);

      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);

      const data = await response.json();
      expect(data).toEqual({});

    });

    test('GET NEgative Test', async({request})=>{
      const resposne = await request.get('https://jsonplaceholder.typicode.com/posts/123424243423');

      expect(resposne.ok()).toBe(false);
      expect(resposne.status()).toBe(404);

    });


  });

  
  