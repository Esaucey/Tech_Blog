const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#usernameLogin');
    const passwordEl = document.querySelector('#passwordLogin');
  
    const response = await fetch('/api/user/login', {
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
      alert('Can not login');
    }
  };
  
  document
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler);