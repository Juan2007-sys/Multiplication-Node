# Multiplication Table Generator

Aplicación CLI en TypeScript que genera tablas de multiplicación y las guarda en archivos.

## Instalación

```bash
npm install
```

## Uso

Ejecutar en desarrollo:
```bash
npm run dev -- -b 5
```

El único parámetro **obligatorio** es `-b` (base de la tabla).

## Opciones

- `-b, --base` (obligatorio): Número base de la tabla
- `-l, --list` (opcional): Límite de multiplicación (default: 10)
- `-s, --show` (opcional): Mostrar tabla en consola
- `-n, --name` (opcional): Nombre del archivo (default: Multiplication-Table)
- `-d, --destination` (opcional): Carpeta destino (default: output)

## Ejemplos

```bash
# Tabla del 5
npm run dev -- -b 5

# Tabla del 7 hasta 15, mostrar en consola
npm run dev -- -b 7 -l 15 -s

# Tabla del 3 con nombre personalizado
npm run dev -- -b 3 -n tabla-del-3
```

## Scripts

- `npm run dev` - Ejecutar con ts-node
- `npm run build` - Compilar a JavaScript
- `npm start` - Compilar y ejecutar
