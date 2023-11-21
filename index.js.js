function handleSubmit () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;



    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("PASSWORD", password); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("PASSWORD", password);



    return;
}
