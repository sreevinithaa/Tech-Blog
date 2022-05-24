const AddblogFormHandler = async (event) => {
    //console.log("succ");
     event.preventDefault();
   
     // Collect values from the login form
     const title = document.querySelector('#title').value;
     const content = document.querySelector('#content').value;
   
     if (title && content) {
        
       // Send a POST request to the API endpoint
       const response = await fetch('/api/blog/', {
         method: 'POST',
         body: JSON.stringify({ title, content }),
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
     .addEventListener('submit', AddblogFormHandler);