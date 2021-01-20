fun main() {
    val elements = listOf("Agua", "Leche", "Carne", "Verduras", "Frutas", "Cereal", "Huevos", "Aceite")
    val recipes = mutableListOf<String>()
    do {
        println(
            """
            :: Bienvenido a Recipe Maker ::


            Selecciona la opción deseada
            1. Hacer una receta
            2. Ver mis recetas
            3. Salir
        """.trimIndent()
        )
        val line = readLine()
        when (line?.toInt()) {
            1 -> {
                val nextRecipe = recipes.size.plus(1)
                println("\nCreando receta $nextRecipe")
                val list = mutableListOf<String>()
                salirCrearReceta@ do {
                    println("Seleccione un ingrediente")
                    for ((index, ing) in elements.withIndex()) {
                        print("${index + 1} - $ing\t")
                        if (index.plus(1) % 4 == 0) println()
                    }
                    println()
                    if (list.size > 0)
                        println("${elements.size.plus(1)} - Guardar")
                    println("0 - Cancelar")
                    when (val opt = readLine()?.toInt()) {
                            in 1..elements.size -> {
                            val selected = elements[opt?.minus(1) ?: 0]
                            print("\nEscriba cantidad de $selected a agregar: ")
                            val amount = readLine()?.toInt()
                            print(
                                """
                                    
                                    Seleccionó $amount de $selected
                                    Si es correcto presione enter para continuar 
                                    """.trimIndent()
                            )
                            if (readLine().isNullOrBlank()) {
                                list.add("$selected: $amount")
                            } else {
                                continue@salirCrearReceta
                            }
                        }
                        elements.size.plus(1) -> {
                            println("Recipe $nextRecipe guardado")
                            recipes.add(list.joinToString(", "))
                            break@salirCrearReceta
                        }
                        0 -> {
                            println("Recipe $nextRecipe cancelado")
                            break@salirCrearReceta
                        }
                        else -> print("Opción inválida, intente de nuevo: ")
                    }
                } while (true)
            }
            2 -> {
                println("Listando mis recetas")
                println(recipes.joinToString("\n"))
            }
            3 -> {
                println("Adios")
                break
            }
            else -> println("Opción inválida")
        }
    } while (true)
}