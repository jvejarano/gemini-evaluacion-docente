// ================================
// SECTION 1: Evaluación Continua (50%)
// ================================
function agregarFila() {
    let nombre = document.getElementById("nombre").value.trim();
    let integral = parseFloat(document.getElementById("integral").value) || 0;
    let docente = parseFloat(document.getElementById("docente").value) || 0;
    let academica = parseFloat(document.getElementById("academica").value) || 0;
    
    if (nombre === "") {
      alert("Por favor, ingresa el nombre del evaluador.");
      return;
    }
    if (integral < 0 || integral > 5) {
      alert("Evaluación Integral debe estar entre 0 y 5.");
      return;
    }
    if (docente < 0 || docente > 25) {
      alert("Actividad Docente Asistencial debe estar entre 0 y 25.");
      return;
    }
    if (academica < 0 || academica > 20) {
      alert("Actividad Académica debe estar entre 0 y 20.");
      return;
    }
    
    let total = integral + docente + academica;
    let tableBody = document.getElementById("tabla-body");
    let row = tableBody.insertRow();
    row.innerHTML = `
      <td>${nombre}</td>
      <td>${integral.toFixed(2)}</td>
      <td>${docente.toFixed(2)}</td>
      <td>${academica.toFixed(2)}</td>
      <td>${total.toFixed(2)}</td>
      <td class="acciones-col">
        <button onclick="editarFila(this)" class="btn btn-sm btn-warning">Editar</button>
        <button onclick="eliminarFila(this)" class="btn btn-sm btn-danger">Eliminar</button>
      </td>
    `;
    actualizarPromedio();
    
    // Limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("integral").value = "";
    document.getElementById("docente").value = "";
    document.getElementById("academica").value = "";
  }
  
  function eliminarFila(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    actualizarPromedio();
  }
  
  function editarFila(button) {
    let row = button.parentNode.parentNode;
    let nombreActual = row.cells[0].innerText;
    let integralActual = row.cells[1].innerText;
    let docenteActual = row.cells[2].innerText;
    let academicaActual = row.cells[3].innerText;
    
    row.dataset.originalNombre = nombreActual;
    row.dataset.originalIntegral = integralActual;
    row.dataset.originalDocente = docenteActual;
    row.dataset.originalAcademica = academicaActual;
    
    row.cells[0].innerHTML = `<input type="text" value="${nombreActual}" class="form-control">`;
    row.cells[1].innerHTML = `<input type="number" value="${parseFloat(integralActual).toFixed(2)}" step="0.01" min="0" max="5" class="form-control">`;
    row.cells[2].innerHTML = `<input type="number" value="${parseFloat(docenteActual).toFixed(2)}" step="0.01" min="0" max="25" class="form-control">`;
    row.cells[3].innerHTML = `<input type="number" value="${parseFloat(academicaActual).toFixed(2)}" step="0.01" min="0" max="20" class="form-control">`;
    
    row.cells[5].innerHTML = `
      <button onclick="guardarEdicion(this)" class="btn btn-sm btn-success">Guardar</button>
      <button onclick="cancelarEdicion(this)" class="btn btn-sm btn-secondary">Cancelar</button>
    `;
  }
  
  function guardarEdicion(button) {
    let row = button.parentNode.parentNode;
    let nombre = row.cells[0].querySelector('input').value.trim();
    let integral = parseFloat(row.cells[1].querySelector('input').value) || 0;
    let docente = parseFloat(row.cells[2].querySelector('input').value) || 0;
    let academica = parseFloat(row.cells[3].querySelector('input').value) || 0;
    
    if (nombre === "") {
      alert("Por favor, ingresa el nombre del evaluador.");
      return;
    }
    if (integral < 0 || integral > 5) {
      alert("Evaluación Integral debe estar entre 0 y 5.");
      return;
    }
    if (docente < 0 || docente > 25) {
      alert("Actividad Docente Asistencial debe estar entre 0 y 25.");
      return;
    }
    if (academica < 0 || academica > 20) {
      alert("Actividad Académica debe estar entre 0 y 20.");
      return;
    }
    
    let total = integral + docente + academica;
    row.cells[0].innerText = nombre;
    row.cells[1].innerText = integral.toFixed(2);
    row.cells[2].innerText = docente.toFixed(2);
    row.cells[3].innerText = academica.toFixed(2);
    row.cells[4].innerText = total.toFixed(2);
    row.cells[5].innerHTML = `
      <button onclick="editarFila(this)" class="btn btn-sm btn-warning">Editar</button>
      <button onclick="eliminarFila(this)" class="btn btn-sm btn-danger">Eliminar</button>
    `;
    
    delete row.dataset.originalNombre;
    delete row.dataset.originalIntegral;
    delete row.dataset.originalDocente;
    delete row.dataset.originalAcademica;
    
    actualizarPromedio();
  }
  
  function cancelarEdicion(button) {
    let row = button.parentNode.parentNode;
    let nombre = row.dataset.originalNombre;
    let integral = parseFloat(row.dataset.originalIntegral) || 0;
    let docente = parseFloat(row.dataset.originalDocente) || 0;
    let academica = parseFloat(row.dataset.originalAcademica) || 0;
    let total = integral + docente + academica;
    
    row.cells[0].innerText = nombre;
    row.cells[1].innerText = integral.toFixed(2);
    row.cells[2].innerText = docente.toFixed(2);
    row.cells[3].innerText = academica.toFixed(2);
    row.cells[4].innerText = total.toFixed(2);
    row.cells[5].innerHTML = `
      <button onclick="editarFila(this)" class="btn btn-sm btn-warning">Editar</button>
      <button onclick="eliminarFila(this)" class="btn btn-sm btn-danger">Eliminar</button>
    `;
  }
  
  function actualizarPromedio() {
    let tableBody = document.getElementById("tabla-body");
    let rows = tableBody.getElementsByTagName("tr");
    let suma = 0, count = rows.length;
    for (let row of rows) {
      suma += parseFloat(row.cells[4].innerText) || 0;
    }
    let promedio = count ? (suma / count).toFixed(2) : "0.00";
    document.getElementById("promedio-total").innerText = promedio;
    actualizarNotaFinal();
  }
  
  // ================================
  // SECTION 2: Defensa de Perfil (20%)
  // ================================
  function agregarFila2() {
    const nombre = document.getElementById('nombre2').value.trim();
    let c1 = parseFloat(document.getElementById('crit1').value) || 0;
    let c2 = parseFloat(document.getElementById('crit2').value) || 0;
    let c3 = parseFloat(document.getElementById('crit3').value) || 0;
    let c4 = parseFloat(document.getElementById('crit4').value) || 0;
    let c5 = parseFloat(document.getElementById('crit5').value) || 0;
    
    if (!nombre) {
      alert('Por favor, ingresa el nombre del evaluador.');
      return;
    }
    if (c1 < 0 || c1 > 20 || c2 < 0 || c2 > 20 || c3 < 0 || c3 > 20 || c4 < 0 || c4 > 20 || c5 < 0 || c5 > 20) {
      alert('Cada criterio debe estar entre 0 y 20.');
      return;
    }
    
    let total = c1 + c2 + c3 + c4 + c5;
    let promedio20 = total * 0.20;
    
    const tableBody2 = document.getElementById('tabla-body2');
    const row = tableBody2.insertRow();
    row.innerHTML = `
      <td>${nombre}</td>
      <td>${c1.toFixed(2)}</td>
      <td>${c2.toFixed(2)}</td>
      <td>${c3.toFixed(2)}</td>
      <td>${c4.toFixed(2)}</td>
      <td>${c5.toFixed(2)}</td>
      <td>${total.toFixed(2)}</td>
      <td>${promedio20.toFixed(2)}</td>
      <td class="acciones-col">
        <button onclick="editarFila2(this)" class="btn btn-sm btn-warning">Editar</button>
        <button onclick="eliminarFila2(this)" class="btn btn-sm btn-danger">Eliminar</button>
      </td>
    `;
    
    document.getElementById('nombre2').value = '';
    document.getElementById('crit1').value = '';
    document.getElementById('crit2').value = '';
    document.getElementById('crit3').value = '';
    document.getElementById('crit4').value = '';
    document.getElementById('crit5').value = '';
    
    actualizarPromedio2();
  }
  
  function eliminarFila2(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    actualizarPromedio2();
  }
  
  function editarFila2(button) {
    const row = button.parentNode.parentNode;
    
    row.dataset.nombre = row.cells[0].innerText;
    row.dataset.c1 = row.cells[1].innerText;
    row.dataset.c2 = row.cells[2].innerText;
    row.dataset.c3 = row.cells[3].innerText;
    row.dataset.c4 = row.cells[4].innerText;
    row.dataset.c5 = row.cells[5].innerText;
    
    row.cells[0].innerHTML = `<input type="text" value="${row.dataset.nombre}" class="form-control">`;
    row.cells[1].innerHTML = `<input type="number" value="${parseFloat(row.dataset.c1).toFixed(2)}" step="0.01" min="0" max="20" class="form-control">`;
    row.cells[2].innerHTML = `<input type="number" value="${parseFloat(row.dataset.c2).toFixed(2)}" step="0.01" min="0" max="20" class="form-control">`;
    row.cells[3].innerHTML = `<input type="number" value="${parseFloat(row.dataset.c3).toFixed(2)}" step="0.01" min="0" max="20" class="form-control">`;
    row.cells[4].innerHTML = `<input type="number" value="${parseFloat(row.dataset.c4).toFixed(2)}" step="0.01" min="0" max="20" class="form-control">`;
    row.cells[5].innerHTML = `<input type="number" value="${parseFloat(row.dataset.c5).toFixed(2)}" step="0.01" min="0" max="20" class="form-control">`;
    
    row.cells[8].innerHTML = `
      <button onclick="guardarEdicion2(this)" class="btn btn-sm btn-success">Guardar</button>
      <button onclick="cancelarEdicion2(this)" class="btn btn-sm btn-secondary">Cancelar</button>
    `;
  }
  
  function guardarEdicion2(button) {
    const row = button.parentNode.parentNode;
    const nombre = row.cells[0].querySelector('input').value.trim();
    let c1 = parseFloat(row.cells[1].querySelector('input').value) || 0;
    let c2 = parseFloat(row.cells[2].querySelector('input').value) || 0;
    let c3 = parseFloat(row.cells[3].querySelector('input').value) || 0;
    let c4 = parseFloat(row.cells[4].querySelector('input').value) || 0;
    let c5 = parseFloat(row.cells[5].querySelector('input').value) || 0;
    
    if (!nombre) {
      alert('Por favor, ingresa el nombre del evaluador.');
      return;
    }
    if (c1 < 0 || c1 > 20 || c2 < 0 || c2 > 20 || c3 < 0 || c3 > 20 || c4 < 0 || c4 > 20 || c5 < 0 || c5 > 20) {
      alert('Cada criterio debe estar entre 0 y 20.');
      return;
    }
    
    const total = c1 + c2 + c3 + c4 + c5;
    const promedio20 = total * 0.20;
    
    row.cells[0].innerText = nombre;
    row.cells[1].innerText = c1.toFixed(2);
    row.cells[2].innerText = c2.toFixed(2);
    row.cells[3].innerText = c3.toFixed(2);
    row.cells[4].innerText = c4.toFixed(2);
    row.cells[5].innerText = c5.toFixed(2);
    row.cells[6].innerText = total.toFixed(2);
    row.cells[7].innerText = promedio20.toFixed(2);
    row.cells[8].innerHTML = `
      <button onclick="editarFila2(this)" class="btn btn-sm btn-warning">Editar</button>
      <button onclick="eliminarFila2(this)" class="btn btn-sm btn-danger">Eliminar</button>
    `;
    
    delete row.dataset.nombre;
    delete row.dataset.c1;
    delete row.dataset.c2;
    delete row.dataset.c3;
    delete row.dataset.c4;
    delete row.dataset.c5;
    
    actualizarPromedio2();
  }
  
  function cancelarEdicion2(button) {
    const row = button.parentNode.parentNode;
    const nombre = row.dataset.nombre;
    const c1 = parseFloat(row.dataset.c1) || 0;
    const c2 = parseFloat(row.dataset.c2) || 0;
    const c3 = parseFloat(row.dataset.c3) || 0;
    const c4 = parseFloat(row.dataset.c4) || 0;
    const c5 = parseFloat(row.dataset.c5) || 0;
    const total = c1 + c2 + c3 + c4 + c5;
    const promedio20 = total * 0.20;
    
    row.cells[0].innerText = nombre;
    row.cells[1].innerText = c1.toFixed(2);
    row.cells[2].innerText = c2.toFixed(2);
    row.cells[3].innerText = c3.toFixed(2);
    row.cells[4].innerText = c4.toFixed(2);
    row.cells[5].innerText = c5.toFixed(2);
    row.cells[6].innerText = total.toFixed(2);
    row.cells[7].innerText = promedio20.toFixed(2);
    row.cells[8].innerHTML = `
      <button onclick="editarFila2(this)" class="btn btn-sm btn-warning">Editar</button>
      <button onclick="eliminarFila2(this)" class="btn btn-sm btn-danger">Eliminar</button>
    `;
  }
  
  function actualizarPromedio2() {
    const tableBody2 = document.getElementById('tabla-body2');
    const rows = tableBody2.getElementsByTagName('tr');
    let suma = 0;
    let count = rows.length;
    for (let row of rows) {
      const prom = parseFloat(row.cells[7].innerText) || 0;
      suma += prom;
    }
    const promedio = (count > 0) ? (suma / count).toFixed(2) : '0.00';
    document.getElementById('promedio-total2').innerText = promedio;
    actualizarNotaFinal();
  }
  
  // ================================
  // SECTION 3: Examen Parcial (30%)
  // ================================
// ================================
// SECTION 3: Examen Parcial (30%)
// ================================
function calcularPromedio3() {
    const nombre = document.getElementById('nombre3').value.trim();
    let nota = parseFloat(document.getElementById('notaParcial').value) || 0;

    if (!nombre) {
        alert('Por favor, ingresa el nombre del estudiante.');
        return;
    }
    if (nota < 0 || nota > 100) {
        alert('La nota debe estar entre 0 y 100.');
        return;
    }

    const promedio30 = nota * 0.30;
    document.getElementById('promedio-total3').innerText = promedio30.toFixed(2);
    actualizarNotaFinal();
}
  
  // ================================
  // Nota Final: Suma de los promedios de las 3 secciones
  // ================================
  function actualizarNotaFinal() {
    let p1 = parseFloat(document.getElementById('promedio-total').innerText) || 0;
    let p2 = parseFloat(document.getElementById('promedio-total2').innerText) || 0;
    let p3 = parseFloat(document.getElementById('promedio-total3').innerText) || 0;
    let suma = p1 + p2 + p3;
    document.getElementById('nota-final').innerText = suma.toFixed(2);
  }
  