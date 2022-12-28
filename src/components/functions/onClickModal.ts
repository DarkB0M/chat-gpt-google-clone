import { sanitizeInput } from './sanitizeInput'
export declare type KeyOnClick = string

/**
 * 
 * @param key Chave da OpenAI API 
 * 
 * 
 */
export const onClickButton = (key:KeyOnClick) => {

    const isSanitize = sanitizeInput(key)
    if(isSanitize === true){
        localStorage.setItem('api-key',key)
       console.log('Chave em seu lugar(localstorage)')
       console.log('Fazendo Reload da pagina')
       location.reload()
    }


}