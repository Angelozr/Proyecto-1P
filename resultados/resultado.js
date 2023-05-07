const resultados = [
  { codigo: '123456', paciente: 'John Doe', fecha: '2023-05-01', examen: 'Hemograma', resultado: '12.0', unidades: 'x10^9/L', valoresDeReferencia: '4.5-11.0', detalles: 'Los resultados indican un posible caso de anemia.' },
  { codigo: '654321', paciente: 'Lucas Perez', fecha: '2023-05-02', examen: 'Química sanguínea', resultado: '100', unidades: 'mg/dL', valoresDeReferencia: '70-100', detalles: 'Los resultados indican niveles normales.' },
  { codigo: '789012', paciente: 'Maria Gomez', fecha: '2023-05-03', examen: 'Perfil lipídico', resultado: '190', unidades: 'mg/dL', valoresDeReferencia: 'menor a 200', detalles: 'Los resultados indican niveles altos de colesterol.' },
  { codigo: '456789', paciente: 'Juan Rodriguez', fecha: '2023-05-04', examen: 'Uroanálisis', resultado: '6.0', unidades: 'mg/dL', valoresDeReferencia: 'menor a 5.0', detalles: 'Los resultados indican la presencia de infección urinaria.' },
  { codigo: '012345', paciente: 'Laura Hernandez', fecha: '2023-05-05', examen: 'Perfil tiroideo', resultado: '4.0', unidades: 'ng/dL', valoresDeReferencia: '0.5-5.0', detalles: 'Los resultados indican niveles normales de hormonas tiroideas.' }
  
  ];
  
  function mostrarResultados() {
    const tabla = document.querySelector('.resultados tbody');
    tabla.innerHTML = '';
    
    resultados.forEach((resultado) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${resultado.codigo}</td>
        <td>${resultado.paciente}</td>
        <td>${resultado.fecha}</td>
        <td>${resultado.examen}</td>
        <td>${resultado.resultado}</td>
        <td>${resultado.unidades}</td>
        <td>${resultado.valoresDeReferencia}</td>
        <td><button onclick="abrirVentana('${resultado.detalles}')">Ver detalles</button></td>
      `;
      tabla.appendChild(row);
    });
  }
  
  function abrirVentana(detalles) {
    const ventana = window.open('', 'Detalles del resultado', 'width=500,height=400');
    ventana.document.write(`
      <html>
        <head>
          <title>Detalles del resultado</title>
          <link rel="stylesheet" href="estilos.css">
        </head>
        <body>
          <h1>Detalles del resultado</h1>
          <p>${detalles}</p>
        </body>
      </html>
    `);
    ventana.document.close();
  }
  
  window.addEventListener('load', mostrarResultados);
  