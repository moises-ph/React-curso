import './miCss.css';
import rey1 from './imagenes/rey_atanagildo.png';
import rey3 from './imagenes/rey_ervigio.png';
import rey4 from './imagenes/rey_incognito.png';
import rey2 from './imagenes/rey_ataulfo.png';



function App() {
  let nombre=["Atanagildo","Ataulfo","Ervigio","Incognito"];
  
  function cambiar_img(j){
    console.log(j);
    if(j.target.src.includes("rey_incognito")){
      if(j.target.parentNode.style.backgroundColor === "white"){
        j.target.style.visibility = "hidden";
      }
      else{
        j.target.parentNode.style.backgroundColor = "white";
      }
    }
    else{
      j.target.src = rey4;
      console.log(j.target.src);
    }
  }

  function cambiar_p(l){
    if(l.target.innerHTML !== "Visto"){
      l.target.innerHTML = "Visto";
    }
    else{
      l.target.style.visibility = "hidden";
    }
  }
  

  return (
    <div className="fondo">
     <div className='reyes' id='rey1'>
       <img onClick={cambiar_img} className='reyes_img' src={rey1}></img>
       <div className='texto' onClick={cambiar_p} >{nombre[0]}</div>
     </div>
     <div className='reyes' id='rey2'>
       <img onClick={cambiar_img} className='reyes_img' src={rey2}></img>
       <div className='texto' onClick={cambiar_p} >{nombre[1]}</div>
     </div>
     <div className='reyes' id='rey3'>
       <img onClick={cambiar_img} className='reyes_img' src={rey3}></img>
       <div className='texto' onClick={cambiar_p} >{nombre[2]}</div>
     </div>
    </div>
  );
}

export default App;
