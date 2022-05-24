const AddCommentFormHandler = async (event) => {
  
    event.preventDefault();
  
    // Collect values from the login form
    const comment = document.querySelector('#comment').value;
    const blog_id = document.querySelector('#blog_id').value;
  
    if (comment && blog_id) {
      
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ comment, blog_id }),
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
  const UpdateCommentFormHandler = async (event) => {
  
    event.preventDefault();
  
    // Collect values from the login form
    const comment = document.querySelector('#comment').value;
    const id = document.querySelector('#id').value;
  
    if (comment && id) {
      
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comment/', {
        method: 'PUT',
        body: JSON.stringify({ comment, id }),
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

if(document
  .querySelector('.comment-form')!=undefined)
  {
    document
    .querySelector('.comment-form')
    .addEventListener('submit', AddCommentFormHandler);
  }
  if(document
    .querySelector('.comment-edit-form')!=undefined)
    {
      document
      .querySelector('.comment-edit-form')
      .addEventListener('submit', UpdateCommentFormHandler);
    }