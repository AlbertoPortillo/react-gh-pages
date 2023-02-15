import spanish from '../diccionario/spanish';
import english from '../diccionario/ingles';
const idioma_selected:string = 'esp';

const diccionario = {
    menu:{
        bienvenida: idioma_selected == 'esp' ?spanish.menu.bienvenida :english.menu.bienvenida,
        about: idioma_selected == 'esp' ?spanish.menu.about :english.menu.about,
        contact: idioma_selected == 'esp' ?spanish.menu.contact :english.menu.contact
    }
}

export default diccionario

