const signupHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#usernameSignup');
    const passwordEl = document.querySelector('#passwordSignup');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Cannot sign up');
    }
    console.log('pass');
  };
  
  document
    .querySelector('#signupForm')
    .addEventListener('submit', signupHandler);