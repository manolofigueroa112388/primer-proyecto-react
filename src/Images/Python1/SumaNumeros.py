#hay funciones que reciben parametros y otras no
def saludar():
    print("Hola, feliz inicio de semana")

saludar()

def suma(a, b):
    return a + b
#parametros de relación
x = 1
y = 2
t = 10
z = 2
resultado = suma(x, y)
print(resultado)

resultado = suma(t, z)
print(resultado)

def suma2():
    suma = 2 + 10
    return suma
result = suma2 ()
print("El resultado de la suma es, ", result)

def suma3(a, b):
    return a + b
print("La suma de a y b es: ", suma3(5, 2))

a = int(input("Ingrese un número: "))
b = int(input("Ingrese un número: "))

def resta():
    re = a - b
    return re
res = resta ()
print("La resta de a y b es: ", res)

def multiplicacion():
    mu = a * b
    return mu
mult = multiplicacion ()
print("La multiplicación de a y b es: ", mult)

def division():
    di = a / b
    return di
div = division ()
print("La división de a y b es: ", div)

radio = float(input("Ingrese el radio del circulo: "))
area = 3.1416 * (radio ** 2)

print("El area del círculo es: ", area)






