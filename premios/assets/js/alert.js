Swal.fire({
  title: 'premios',
  text: "los prremios cambiaran cada semana!",
  icon: 'warning',
  //showCancelButton: 'false',
  confirmButtonColor: '#3085d6',
  //cancelButtonColor: '#d33',
  confirmButtonText: 'ok'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'recuerda que los datos se enviaran.',
      ''
    )
  }
})