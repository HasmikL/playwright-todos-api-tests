
import { test, expect } from '@playwright/test';


  const todoId = 7;

  const newTODO = {
    "userId": 1,
    "id": 1,
    "title": "Do Homework",
    "completed": true
  }

  const updatedToDO = {
    "userId": 5,
    "id": 1,
    "title": "Do Your Homework",
    "completed": true
  }

  const partialUpdatedToDo = {

    "userId": 5,
    "id": 1,
    "title": "Complete the Restful Booker",
    "completed": true

  }



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

   test('POST- create a new TODO', async({request})=>{
    const response = await request.post('https://jsonplaceholder.typicode.com/todos',{
      data:newTODO
    });

    expect(response.ok()).toBe(true);
    expect(response.status()).toBe(201);

    const data = await response.json();

    expect(data).toHaveProperty('userId',newTODO.userId);
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title',newTODO.title);
    expect(data).toHaveProperty('completed',newTODO.completed);

    //console.log(newTODO);
    
   });

   test(`PUT- update TODO ${todoId}`, async({request})=>{
    const response = await request.put(`https://jsonplaceholder.typicode.com/todos/${todoId}`,{
      data:updatedToDO
    });

    expect(response.ok()).toBe(true);
    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data).toHaveProperty('userId',updatedToDO.userId);
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title',updatedToDO.title);
    expect(data).toHaveProperty('completed',updatedToDO.completed);

    //console.log(updatedToDO);
    
   });

   test(`PATCH- partially update TODO ${todoId}`, async({request})=>{
    const response = await request.patch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,{
      data:partialUpdatedToDo
    });

    expect(response.ok()).toBe(true);
    expect(response.status()).toBe(200);

    const data = await response.json();

   
    expect(data).toHaveProperty('title',partialUpdatedToDo.title);
    

    //console.log(partialUpdatedToDo);
    
   });

   test(`DELETE- TODO ${todoId}`, async({request})=>{
    const response = await request.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`,{
      
    });

    expect(response.ok()).toBe(true);
    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data).toEqual({});
    
    
   });

   test('GET Negative Test', async({request})=>{
      const resposne = await request.get('https://jsonplaceholder.typicode.com/todos/999999999999999');

      expect(resposne.ok()).toBe(false);
      expect(resposne.status()).toBe(404);

    });


});

