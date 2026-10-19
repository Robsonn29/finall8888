export const nomes = [
    "Fernanda",
    "Giuliana",
    "Eduardo",
    "Robson",
    "Paola",
    "Gustavo",
    "Gabriel"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}