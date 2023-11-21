﻿window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname');
    const email = params.get('email');
    const password = params.get('password'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME');
    const email = localStorage.getItem('EMAIL');
    const password = localStorage.getItem('PASSWORD'); */
    
    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    const email = sessionStorage.getItem('EMAIL');
    const password = sessionStorage.getItem('PASSWORD');

    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
     document.getElementById('result-email').innerHTML = email;
      document.getElementById('result-password').innerHTML = password;



})
