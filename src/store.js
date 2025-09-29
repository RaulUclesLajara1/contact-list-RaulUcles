export const Initial_value = () => ({contactos: []})

export default function Contact_Reducer (state,action){
    switch (action.type){
        case 'Cargar':
            return {...state, contactos: action.payload}
        case 'Eliminar':
            return {...state, contactos: state.contactos.filter(x => x.id != action.payload)}
    }
}