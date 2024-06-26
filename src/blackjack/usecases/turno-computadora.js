import { valorCarta, pedirCarta, crearCartaHTML } from "./";
/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora ,  deck = []) => {
    if (!puntosMinimos) throw new Error("puntos minimos son necesarios");
    if (!puntosHTML) throw new Error("puntosHTML minimos son necesarios");
    
    
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        divCartasComputadora.append(crearCartaHTML(carta));

        if (puntosMinimos > 21) {
        break;
        }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana :(");
        } else if (puntosMinimos > 21) {
        alert("Computadora gana");
        } else if (puntosComputadora > 21) {
        alert("Jugador Gana");
        } else {
        alert("Computadora Gana");
        }
    }, 100);
};
