export class CuentaCorriente{
    cliente;
    numero;
    #saldo;
    agencia;
    static cantidadCuentas = 0;

    constructor(){
        this.cliente = null;
        this.numero = '';
        this.#saldo = 0;
        this.agencia = '';
        CuentaCorriente.cantidadCuentas++;
    }

    deposito(valor){
        if(valor > 0){
            this.#saldo += valor;
            return this.verSaldo();
        }
    }

    retirar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return this.verSaldo();
        }else{
            return "La cuenta no teine los fondos para realizar esa extraccion";
        }
    }

    verSaldo(){
        return this.#saldo;
    }

    trasferirACuenta(valor, cuentaDestino){
        this.retirar(valor);
        cuentaDestino.deposito(valor);
    }
}