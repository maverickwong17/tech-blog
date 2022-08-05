const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment').value.trim();
    console.log('response')
    var postpath = window.location.pathname
    var postArr = postpath.split('/')
    var post_id = postArr[postArr.length-1]
    if (content) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ content: content, post_id: Number(post_id) }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        location.reload()
      } else {
        console.log('alert')
        alert(response.statusText);
      }
    }
  };


document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);