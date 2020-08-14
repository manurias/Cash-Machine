
class biglietto
{
  constructir(v, c)
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
