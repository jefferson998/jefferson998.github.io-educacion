// var global
var z=-1
//funciones puras valor
// nada altere a esta funcion de
// no contaminar con variables globales
//const tiempo de compilacion
const val N="NAME" //manera var global
var n0="n" //mala practica
val n2="n"
fun main() {

    // var changeables
    // var unchangeables
    // const el valor se determina en tiempo de compilación
    //    val el valor se puede determinar en tiempo de ejecucion
    var n=3
    // var locales
    println(n)
    // otra forma
    println(z)
    val x=5 //tiempo de ejecucion
    println(x)
    println(N)

    val nombre="Jefferson"
    val apellido:String = "Paz"
    // val x2:Int =2
    println("Tu nombre es: $nombre $apellido")

    val nombreJohana="Johana\nRuiz"
    val nombreJohana2="Johana\tRuiz"
    println(nombreJohana2)
    //raw string
    val parrafo = """
    ## Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    """.trimIndent()
    println(parrafo.trimMargin("## "))
    println(nombreJohana)
    var numero1:Int = 8
    println(numero1.toByte())
    //rango 
    val oneToHundred:IntRange = 1..10
    for (i in oneToHundred){
        println(i)

    }

    // val aToC = 'A'..'C'
    for (letra in 'A'..'C'){ 
        println(letra)

    }


}