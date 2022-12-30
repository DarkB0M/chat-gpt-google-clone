
// Não usei o useRouter do next para não causar erro


/**
 * 
 * @param key Significa as palavras da busca
 */
export const RouterDirect = (key:string) => {
    
    if(key === ''){
        console.log('Nothing on the key param')
        return Error('Nothing on the key param')
      
    }
    else{
        console.log('Pushing')
        console.clear()
        // Coloca na pagina search com o parametro query
       window.location.href = `search?query=${key}`

    }
    // Coloca na rota search

}
