{
  let total=1;
  function Factura(fecha,empresa,cliente,irpf,re,observaciones) {
    this.fecha = fecha;
    this.empresa = empresa;
    this.cliente = cliente;
    this.irpf = irpf;
    this.re = re;
    this.observaciones = observaciones;
    this.total = this.calculaTotal();
    this.id = this.incrementaId();
  }

  Factura.prototype.id = 0;

  Factura.prototype.incrementaId = function() {
    return this.id++;
  };

  Factura.prototype.calculaTotal = function() {  
    total += total * parseFloat(this.irpf / 100);
    total += total * parseFloat(this.re / 100);
    console.log(total);
    return total.toFixed(2);
  };
}