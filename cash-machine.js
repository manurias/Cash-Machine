
class biglietto
{
  constructor(v, c)
  {
    this.valore = v;
    this.quantità = c;
  }
}

function consegnareDenaro()
{
  var t = document.getElementById("denaro");
  denaro = parseInt(t.value);
  for (var bi of cassa)
  {

  if (denaro > 0)
   {
    div =Math.floor(denaro / bi.valore);
    
    if(div > bi.quantità;
  }
   else
  {
    documenti = div;
  }
    
    consegnando.push(new Biglietto(bi.valore, documenti));
    denaro = denaro - (bi.valore * documenti);
    
  }
 }
  if (denaro > 0)
    {
    risultato.innerHTML = "Sono un bancomat cattivo, sono molto cattivo e non voglio darti quella cifra ";
    }
    else
    {
      for(var e of consegnato) 
      {
        if(e.quantità > 0)
         {
            risultato.innerHTML += e.quantità + " Biglietti di €" + e.valore + "<br />";
         }
       }
    }
   }
    
    var cassa = [];
    var consegnato = [];
    cassa.push( new Biglietti(100,5) );
    cassa.push( new Biglietti(50,10) );
    cassa.push( new Biglietti(20,5) );
    cassa.push( new Biglietti(10,10) );
    cassa.push( new Biglietti(5,5) );
    var denaro = 0;
    var div = 0;
    var fogli = 0;

    var risultato = document.getElementById("risultato");
    var b = document.getElementById("estrarre");
    b.addEventListener("click", consegnareDenaro);
