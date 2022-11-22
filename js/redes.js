Swal.fire({
    title: 'cargando',
    text: "Espera por favor",
    icon: 'warning',
    //showCancelButton: 'false',
    confirmButtonColor: '#3085d6',
    //cancelButtonColor: '#d33',
    confirmButtonText: 'Yes,'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Cargando..',
        'Cargando archivos.'
      )
    }
  })