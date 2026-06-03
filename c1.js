console.log(NaN == NaN);
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
console.log(undefined == undefined);
console.log(null == null);

console.log("--- Ejemplos de Cortocircuito ---");

// || (OR) - Busca el primer valor que equivalga a "verdadero" (truthy).
// Son "falsos": 0, "" (texto vacío), null, undefined, NaN y false.
console.log(null || "usuario_default"); // "usuario_default" (null es falso)
console.log("Carlos" || "usuario_default"); // "Carlos" ("Carlos" es verdadero)
console.log(0 || 100); // 100 (0 es falso)

// ?? (Nullish) - NO busca "verdaderos" ni "falsos". Simplemente rechaza null y undefined.
// Si el valor de la izquierda es null o undefined, retorna el valor de la derecha. 
// Si es CUALQUIER otra cosa (incluso false, 0 o ""), se queda con el de la izquierda.
console.log(0 ?? 100); // 0 (no es null ni undefined)
console.log(false ?? 100); // false (false es un valor válido, no es null/undefined)
console.log(null ?? 100); // 100 (como es null, salta a la derecha)

// && (AND) - Busca el primer valor que equivalga a "falso" (falsy)
console.log(0 && "Todo bien"); // 0 (0 es falso, se detiene aquí y lo devuelve)
console.log("naruto" && "sasuke"); // "sasuke" ("naruto" es verdadero, pasa al siguiente)