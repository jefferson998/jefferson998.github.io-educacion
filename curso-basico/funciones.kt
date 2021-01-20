fun main() {

    println("raiz cuadrada: ${Math.sqrt(4.0)}")
    val numbers: IntArray = intArrayOf(2,4,5,6,7)
    println("El promedio de los numeros es: ${averageNumbers(numbers, 2)}")
}

//promedio de numeros

fun averageNumbers(numbers:IntArray,n:Int): Int{
    var suma=0
    for (num in numbers){
        suma += num
    }
    return (suma/numbers.size)+n
}