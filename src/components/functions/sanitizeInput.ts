
export declare type functionParams = string
/**
 * 
 * @param key chave da openAi para serv validada em um teste de tamanho;
 * @returns boolean
 */
export const sanitizeInput = (key:functionParams) : boolean =>  {
    if(key.length == 51){
        console.log('passed on sanitize input   ')
        return true
    }
    else{
        console.error('Not Passed on SanitizeInput')
        return false
    }

    return true
}
