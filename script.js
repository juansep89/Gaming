// ===== 1. Los datos: mis consolas =====
// Es una "lista" (array). Cada consola es un "objeto" con nombre, año y marca.
// Para agregar una consola nueva, solo copia una línea y cambia los datos.
const consolas = [
  { nombre: "SNES",            anio: 1991, marca: "Nintendo" },
  { nombre: "PS1",             anio: 1995, marca: "Sony" },
  { nombre: "N64",             anio: 1996, marca: "Nintendo" },
  { nombre: "Dreamcast",       anio: 1999, marca: "Sega" },
  { nombre: "PS2",             anio: 2000, marca: "Sony" },
  { nombre: "Xbox",            anio: 2001, marca: "Microsoft" },
  { nombre: "Xbox 360",        anio: 2005, marca: "Microsoft" },
  { nombre: "PSP",             anio: 2005, marca: "Sony" },
  { nombre: "Xbox One",        anio: 2013, marca: "Microsoft" },
  { nombre: "PS4 Pro",         anio: 2016, marca: "Sony" },
  { nombre: "Switch",          anio: 2017, marca: "Nintendo" },
  { nombre: "Xbox Series X/S", anio: 2020, marca: "Microsoft" },
  { nombre: "PS5 Pro",         anio: 2024, marca: "Sony" },
  { nombre: "Switch 2",        anio: 2025, marca: "Nintendo" },
];

// ===== 2. Ordenar por año =====
// sort() compara dos consolas (a y b). Si el resultado es negativo, "a" va primero.
// Así, aunque escribas las consolas en desorden, siempre salen de la más vieja a la más nueva.
const ordenadas = [...consolas].sort((a, b) => a.anio - b.anio);

// ===== 3. Dibujar las tarjetas en la página =====
// Buscamos en el HTML la lista vacía por su id="vitrina".
const vitrina = document.getElementById("vitrina");

for (const consola of ordenadas) {
  // Creamos un elemento <li> nuevo para esta consola
  const tarjeta = document.createElement("li");

  // Le ponemos clases: "consola" (estilo general) + la marca en minúsculas (para el color)
  tarjeta.className = "consola " + consola.marca.toLowerCase();

  // Llenamos la tarjeta con su contenido
  tarjeta.innerHTML = `
    <span class="anio">${consola.anio}</span>
    <div>
      <h2 class="nombre">${consola.nombre}</h2>
      <p class="marca">${consola.marca}</p>
    </div>
  `;

  // La agregamos a la vitrina
  vitrina.appendChild(tarjeta);
}

// ===== 4. Mostrar cuántas consolas hay y qué años cubren =====
const primera = ordenadas[0].anio;
const ultima = ordenadas[ordenadas.length - 1].anio;
document.getElementById("contador").textContent =
  `${ordenadas.length} consolas · ${primera}–${ultima}`;
