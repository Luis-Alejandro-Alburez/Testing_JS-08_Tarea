function calculateEquivalentAge() {
  // Obtener la edad del usuario
  const humanAge = parseInt(document.getElementById("humanAge").value);

  // Validar que la edad sea un número positivo
  if (isNaN(humanAge) || humanAge < 0) {
    alert("Por favor, ingresa una edad válida.");
    return;
  }

  // Obtener la esperanza de vida de la especie seleccionada
  const speciesLifeExpectancy = parseInt(
    document.getElementById("species").value
  );

  // Calcular la edad equivalente
  const equivalentAge = (humanAge * speciesLifeExpectancy) / 80;

  // Mostrar el resultado
  document.getElementById(
    "result"
  ).textContent = `Tu edad equivalente es: ${equivalentAge.toFixed(1)} años.`;
}
