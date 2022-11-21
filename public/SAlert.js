

  if (-1 === document.cookie.indexOf('returning=true')) {

    // run only if cookie not found (-1 means not found)
  
    swal.fire({
      title: '<strong><u>Importante!!</u></strong>',
      icon: 'info',
      html:
        '<iframe width="350" height="550" src="https://www.youtube.com/embed/L0DXShhUfZc?rel=0&amp;autoplay=1"></iframe>',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up">Gracias!</i>',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    }); // alert
    document.cookie = 'returning=true'; // set cookie
  }