contador = 0
while contador <= 5:
    print("contador: ", contador)
    contador += 1

i = 10

acum = 0
n = int(input("Digite el número que desea sumar: "))
while n != 0:
    acum = acum + n
    print("La suma de los numeros es:", acum)

    print("Digita cero si quieres terminar la suma")

    n = int(input("Digite el número que desea sumar: "))

    print("Programa finalizado. La suma total es: ", acum)
