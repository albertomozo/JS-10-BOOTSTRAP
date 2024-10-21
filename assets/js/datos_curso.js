/* export const manuales  = {
    materias : [
        {
            "materia" : "HTML",
            "url" : 'https://docs.google.com/presentation/d/1KfPKrD9dmRxfIlOQ9hdRaeayiibZQ7jZJXq_qWlHOTA/edit?usp=sharing',
            "imagen" : "html.svg",
            "categoria" : "1",
            "tipo" : 'drive',
            "precio" : 0,
        },
        {
            "materia" : "JS",
            "url" : 'https://docs.google.com/presentation/d/1rTIUbxueAOxUOdXNKrYtGgCswSCpzSENOLpReap8E5A/edit?usp=sharing',
            "imagen" : "js.svg",
            "categoria" : "1",
            "precio" : 25,
        },
        {
            "materia" : "SASS",
            "url" : 'https://docs.google.com/presentation/d/1Lr8MJz9VN-TjAu0dqOe5RsJiwO0VYG60XxWZGZLq7oo/edit?usp=sharing',
            "imagen" : "sass.svg",
            "categoria" : "1",
            "precio" : 15,
        },
        {
            "materia" : "PHP",
            "url" : 'https://docs.google.com/presentation/d/13540h_unETM2xycZFKPBPPfpwRo9UO1vdqnS2zi4gUo/edit?usp=sharing',
            "imagen" : "php.svg",
            "categoria" : "2",
            "precio" : 35,
        },
        {
            "materia" : "GIT",
            "url" : 'https://docs.google.com/presentation/d/1v8LjvzaJVrzTUrp3jUhqi79V3jjB4E90blN_RDNsxIo/edit?usp=sharing',
            "imagen" : "Git_logo_PNG2.png",
            "categoria" : "3",
            "precio" : 25,
            "oferta" : 20
        },
        {
            "materia" : "SQL",
            "url" : 'https://docs.google.com/presentation/d/19ttx2_dnJ03UezVY-OUa4_YW-nCgWD-ti76Sa_qfLac/edit?usp=sharing',
            "imagen" : "sql.svg",
            "categoria" : "2",
            "precio" : 10,
            "oferta" : 50
        },
        {
            "materia" : "Visual Studio Code",
            "categoria" : "3",
            "precio" : 10,
        },
        {
            "materia" : "AIRTABLE",
            "url" : 'https://docs.google.com/presentation/d/1Vy7pSE19KBPgvintDCYRA7JJB-5OWXOvpMkS3CSZ-lg/edit?usp=sharing',
            "imagen" : "airtable_logo_icon_169628.png",
            "categoria" : "4",
            "precio" : 12,
        },
        {
            "materia" : "Programación",
            "url" : 'https://docs.google.com/presentation/d/1aROfBbbREKcBomYTxCqR41YfFoJGpfrRsuevn5tVs7o/edit#slide=id.p',
            "imagen" : "programacion.png",
            "categoria" : "5",
            "precio" : 1,
        }



    ]
    
} */

    /* export const manuales = {
        materias: []
    };
    
    // Función que obtiene los datos y resuelve cuando los asigna a manuales.materias
    export async function fetchMaterias() {
        try {
            const response = await fetch("https://notion-js-sdk-vercel.vercel.app/cursosweb");
            const result = await response.json();
            manuales.materias = result;
            console.log('Materias fetched:', manuales.materias);  // Imprime los datos cuando están listos
            return manuales.materias;  // Retorna los datos una vez obtenidos
        } catch (err) {
            console.error("Error fetching materias:", err);
            return null;
        }
    }
    
    // Llamar a la función y realizar operaciones cuando los datos estén disponibles
    fetchMaterias().then((materias) => {
        if (materias) {
            console.log("Datos de materias disponibles para usar:", materias);
            // Aquí puedes continuar con otras operaciones que dependan de `manuales.materias`
        } else {
            console.log("No se pudieron obtener los datos.");
        }
    });
     */

export const   categorias = [
        {
            id : 0,
            nombre : "Todos",
            icono :""
        },
        {
            id : "f5499c02-7da1-4787-8541-5d71d47eeba8",
            nombre : "FRONTEND",
            icono :""
        },
        {
            id : "983fb75f-a660-4312-886f-6bfbae8cb5ac",
            nombre : "Back",
            icono :""
        },
        {
            id : "a6228e5e-caf1-430f-8795-ee0ea66c74f4",
            nombre : "Herramientas",
            icono :""
        },
        {
            id : "2164d385-55d3-4cc3-b5ac-72c181ca05e7",
            nombre : "Nocode",
            icono :""
        },
        {
            id : "104c651c-400b-80b3-b7bd-e239033ab422",
            nombre : "Informatica",
            icono :""
        },
        {
            id : "103c651c-400b-8044-85a2-d62bafc5eeb8",
            nombre : "DevOps",
            icono :""
        },
        {
            id : "103c651c-400b-803d-95ce-c7f2f091240e",
            nombre : "OTROS",
            icono :""
        }
    ]
    /* [
        {
          "pageId": "104c651c-400b-80b3-b7bd-e239033ab422",
          "name": "INFORMATICA"
        },
        {
          "pageId": "103c651c-400b-8044-85a2-d62bafc5eeb8",
          "name": "DEVOPS"
        },
        {
          "pageId": "103c651c-400b-803d-95ce-c7f2f091240e",
          "name": "OTROS"
        },
        {
          "pageId": "2164d385-55d3-4cc3-b5ac-72c181ca05e7",
          "name": "NOCODE"
        },
        {
          "pageId": "983fb75f-a660-4312-886f-6bfbae8cb5ac",
          "name": "BACK"
        },
        {
          "pageId": "a6228e5e-caf1-430f-8795-ee0ea66c74f4",
          "name": "HERRAMIENTA"
        },
        {
          "pageId": "f5499c02-7da1-4787-8541-5d71d47eeba8",
          "name": "FRONT"
        }
      ] */

    
        

