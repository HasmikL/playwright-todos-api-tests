
import { test, expect } from '@playwright/test';

test.describe('Todos API Tests', async() => {
   
    test(' Get All Todos',async ({request}) => {

        const response = await request.get('https://jsonplaceholder.typicode.com/todos');

        expect(response.ok()).toBeTruthy;
        expect(response.status()).toBe(200);
        

        const results = await response.json();

        expect(results.length).toBe(200);
        expect(results.length).toBeGreaterThan(0);

        for(let result of results ){
            
        expect(result).toHaveProperty('userId');
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('title');
        expect(result).toHaveProperty('completed');
    
    }

  });

   test('Get 9th Todo',async ({request}) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/todos/9');

     expect(response.ok()).toBe(true);
     expect(response.status()).toBe(200);
        

        const Todo = await response.json();

      
            expect(Todo).toHaveProperty('userId');
            expect(Todo).toHaveProperty('id', 9);
            expect(Todo).toHaveProperty('title');
            expect(Todo).toHaveProperty('completed');

    
     
  });

     const todoId = 7;

   test(`Get ${todoId}th Todo`, async ({ request }) => {


        const response = await request.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

        expect(response.ok()).toBe(true);
        expect(response.status()).toBe(200);

        const todo = await response.json();

        expect(todo).toHaveProperty('userId');
        expect(todo).toHaveProperty('id', todoId);
        expect(todo).toHaveProperty('title');
        expect(todo).toHaveProperty('completed');
});   

});