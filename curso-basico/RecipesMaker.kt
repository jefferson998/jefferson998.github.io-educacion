



fun main() {
    val elements=listOf("Agua","Leche","Carne","Verduras","Frutas","Cereal","Huevos","Aceite")
    val recipes = mutableListOf<String>()
    do{
    val parrafo = """
    :: Bienvenido a Recipe Maker ::
    Selecciona la opción deseada
    1. Hacer una receta
    2. Ver mis recetas
    3. Salir
    """.trimIndent()
    println(parrafo.trimMargin())
    }
    val responseline = readLine()
    when (responseline?.toInt()){
         1->{
             makeRecipe(recipes,elements)
         }
         2->{
             viewRecipe(recipes)
        }
        3->{
            println("Nos complace ayudarte, te estaremos esperando!!")
            
        }
        else->println("opción invalida, intenta de nuevo")


    }while(true)

}


private fun viewRecipe(recipes:MutableList<String>){
    if (recipes.size>0){
        println("Listando Mis recetas")
        println(recipes.joinToString("\n"))
    }
}

private fun makeRecipe(recipes: MutableList<String>,elements:List<String>){
    
    val newRecipe=recipes.size.plus(1)
    println("Creando receta $newRecipe")
    val list = mutableListOf<String>()

    outNewRecipe@ do{
        println("seleccione un ingrediente")
        for ((index,ingrediente) in elements.withIndex()){
            println("Ingrediente N°: ${index + 1} - $ingrediente\t")
            if (index.plus(1) %4 == 0) println()
        }
        println()
        if (list.size>0)
    }
}