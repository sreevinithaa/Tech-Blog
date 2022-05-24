const EditblogFormHandler = async (event) => {
    //console.log("succ");
     event.preventDefault();
   
     // Collect values from the login form
     const title = document.querySelector('#title').value;
     const content = document.querySelector('#content').value;
     const id = document.querySelector('#id').value;
   
     if (title && content&&id) {
        
       // Send a Put request to the API endpoint
       const response = await fetch('/api/blog/', {
         method: 'PUT',
         body: JSON.stringify({ title, content,id }),
         headers: { 'Content-Type': 'application/json' },
       });
   
       if (response.ok) {
         // If successful, redirect the browser to the profile page
         document.location.replace('/');
       } else {
         alert(response.statusText);
       }
     }
   };
 
  
   document
     .querySelector('.blog-form')
     .addEventListener('submit', EditblogFormHandler);