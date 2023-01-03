import { CuentaCorriente } from "./cuentaCorriente.js";
import { Cliente } from "./cliente.js";


const clienteUno = new Cliente('hernan', '37985043', '243221');
const clienteDos = new Cliente('raquel', '92394445', '243222');
const cuentaUno = new CuentaCorriente(clienteUno, '001', '1');
const cuentaDos = new CuentaCorriente(clienteDos, '001', '2');

cuentaUno.deposito(5000);

console.log(`el saldo de la cuenta de ${clienteUno.nombreCliente} es: ${cuentaUno.verSaldo()}`);
console.log(`el saldo de la cuenta de ${clienteDos.nombreCliente} es: ${cuentaDos.verSaldo()}`);

console.log(CuentaCorriente.cantidadCuentas);