export const Initial_value = () => ({contactos: []})

export default function Contact_Reducer (state,action){
    switch (action.type){
        case 'Cargar':
            return {...state, contactos: action.payload}
        
    }
}