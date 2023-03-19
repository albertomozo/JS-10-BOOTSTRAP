
/*LISTENERS */
export  function listeners(){
    let btnCategorias= document.querySelectorAll('#categorias');
    console.log('entro');
    for (let i=0;i<btnCategorias.length;i++){
             btnCategorias[i].addEventListener('click',(e)=>{
            e.preventDefault();
            const  cate = e.target.innerText;
            const  cat = '.'+e.target.innerText;
            const cateid = '#btn_'+e.target.innerText;
            console.log(cate);
        /*   console.log('cateid ' + cateid + ' ' + document.querySelector(`${cateid}`));
            console.log(document.querySelector('#btn_Todos')); */
            // poner fondo y color mediante estylos
        /*     document.querySelector(`${cateid}`).style.background='blue';
            document.querySelector(`${cateid}`).style.color='white'; */
            // poner fondo y color mediante clase css activa
            console.log(document.querySelector(`${cateid}`));
            document.querySelectorAll('.cate').forEach((element)=>{
                element.classList.remove('active');
            })   
            document.querySelector(`${cateid}`).classList.add('active');
            //document.querySelector(cateid).style.color='white';

            //alert(cat);
           let materias;
            if (cat == '.Todos'){
                materias =document.querySelectorAll('.materias');
                materias.forEach(function (element) {
                    console.log(element);
                    element.style.display = 'inline';
                });
            } else {
                /* quitamos visibilidad a todos los elementos de contenido */
                materias =document.querySelectorAll('.materias');
                materias.forEach(function (element) {
                    console.log(element);
                    element.style.display = 'none';
                });
                const materiasVisibles = document.querySelectorAll(cat);
                console.log(materiasVisibles);
                materiasVisibles.forEach(function (element) {
                    console.log(element);
                    element.style.display = 'inline';
                });
            }
        })
    }
}