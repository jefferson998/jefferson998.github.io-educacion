fun main() {
    // variable?.metodo() validada para no lanzar excepciones
    // double bang !!
    // forza a que se lance la excpecion
    // manejar la excepcion
    //  operador elvis ?:

    //Null safety
    
    
    try {
        var computer: String? = null
        var longitud: Int = computer!!.length
        println(longitud)
    }catch (e: NullPointerException){
        println("Ingresa un valor, no aceptamos nulos")
    }

    // Llamada segura
    var compute: String? =null
    var longitud: Int? = compute?.length
    println("Longitud: $longitud")

    //operador Elvis
    var teclado: String? = null
    var longitudTeclado: Int = teclado?.length ?:0
    println("longitud Teclado: $longitudTeclado")

    val listWithNulls: List<Int?> = listOf<Int?>(7,null,null,4)
    println("Lista con nulls: ${listWithNulls}")

    val listWithoutNulls: List<Int?> = listWithNulls.filterNotNull()
    println(listWithoutNulls)

}