<?php if (isset($_GET['success'])): ?>
<script>
Swal.fire({
    icon: 'success',
    title: '¡Postulación enviada!',
    text: 'Tu información fue enviada correctamente.',
    confirmButtonColor: '#3085d6'
});
</script>
<?php endif; ?>

<?php if (isset($_GET['error'])): ?>
<script>
Swal.fire({
    icon: 'error',
    title: 'Error al enviar',
    text: 'Hubo un problema al enviar tu postulación. Intenta nuevamente.',
    confirmButtonColor: '#d33'
});
</script>
<?php endif; ?>
