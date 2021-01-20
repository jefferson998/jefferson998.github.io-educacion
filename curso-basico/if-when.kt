fun main() {


    // if operadores logicos boleano true o false
    val numero = 5
    if (numero.equals(2)){
        println("si son iguales")
    }else{
        println("No son iguales")
    }
     
    // when switch

    when (numero){
        in 1..5 ->println("Si esta entre 1 y 5")
        in 1..3 -> println("Si esta entre 1 y 3")
        in 5..10 -> println("No esta entre 5 y 10")
        else -> println("No esta en ninguno de los anteriores")
    }
    
    //do y do while
    var i:Int = 1
    //while contadores
    while(i <=5){
        println("mensaje: $i")
        i=i.inc() //i++
    }
    var i1:Int = 1
    do{
        println("mensaje do while: $i1")
        i1=i1.inc() //i++
    }while(i1<1)
    var daysOfWeek = listOf("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado")

    for(day in daysOfWeek){
        println(day)
    }

    for((index,day) in daysOfWeek.withIndex()){
        println("$index :$day")
    }
    var daysOfWeek2 = listOf("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado")
    daysOfWeek2.forEach{
            println(it)
    }
}