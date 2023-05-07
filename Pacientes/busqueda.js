const form = document.querySelector('.busqueda');
        const pacientes = document.querySelectorAll('.paciente');
      
        form.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevenir el envío del formulario
          const codigo = document.getElementById('codigo').value;
      
          pacientes.forEach((paciente) => {
            const codigoPaciente = paciente.querySelector('li:nth-child(1)').textContent.split(': ')[1];
      
            if (codigoPaciente === codigo) {
              paciente.style.display = 'block';
            } else {
              paciente.style.display = 'none';
            }
          });
        });