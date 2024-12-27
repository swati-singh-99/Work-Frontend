const basicPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Basic Promise resolved!");
        console.log("First statement")
    } else {
        reject("Basic Promise rejected!");
    }
});

basicPromise
    .then((result) => console.log(result))
    .catch((error) => console.error(error)); 


    
const chainedPromise = new Promise((resolve) => {
        resolve("Step 1 completed!");
        console.log("Chained method")
    });   
    
chainedPromise
        .then((result) => {
            console.log(result); 
            return "Step 2 completed!";
        })
        .then((result) => {
            console.log(result); 
        })
        .then((result) => {
            console.log(result); 
            return "Step 3 completed!"
        })
        .then((result) => {
            console.log(result); 
        })


        
const promise1 = Promise.resolve("Task 1 completed!");
const promise2 = Promise.resolve("Task 2 completed!");
const promise3 = Promise.resolve("Task 3 completed!");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("Static method")
        console.log("All tasks completed:", results);
    })
    .catch((error) => {
        console.error("One task failed:", error);
    });
    


    const slow = new Promise((resolve) => setTimeout(() => resolve("Slow response"), 2000));
    const fast = new Promise((resolve) => setTimeout(() => resolve("Fast response"), 1000));
    
    Promise.race([slow, fast])
        .then((result) => {
            console.log(result); 
        });



        function dynamicApiCall() {
            return new Promise((resolve, reject) => {
                fetch('https://jsonplaceholder.typicode.com/users/1')  
                    .then(response => {
                        if (!response.ok) {
                            reject('Failed to fetch data');
                        } else {
                            return response.json();
                        }
                    })
                    .then(data => {
                        resolve(data);  
                    })
                    .catch(error => {
                        reject('Error during API call: ' + error);
                    });
            });
        }
        
        dynamicApiCall()
            .then(data => {
                console.log("Dynamic Promise API Response:", data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        
    
        function staticApiCall() {
            const apiCall = fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(data => {
                    return Promise.resolve(data); 
                })
                .catch(error => Promise.resolve(`Error: ${error.message}`));  
        
            apiCall
                .then(response => {
                    console.log("Static Promise API Response:", response);
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
        
        staticApiCall();
        

       