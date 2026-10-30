def operaciones(a, b):
    suma = a + b
    resta = a - b
    multiplicacion = a * b
    division = a / b
    return suma, resta, multiplicacion, division

a = int(input("Digite un número: "))
b = int(input("Digite un número: "))

suma, resta, multiplicacion, division = operaciones(a, b)

print(f"El resultado de la suma es: {suma}", f"El resultado de la resta es: {resta}", f"El resultado de la multiplicación es: {multiplicacion}", f"El resultado de la division es: {division}")


vel = int(input("Digite la velocidad de 0 a 100 kilometros por hora: "))

def velocidad(vel):
    return velocidad
if vel <= 20:
    print("Su velocidad es baja")

elif 21 <= vel <= 40:
    print("Su velocidad es media")

elif 41 <= vel <= 60:
    print("Su velocidad es normal")

elif 61 <= vel <= 80:
    print("Su velocidad es alta")

elif 81 <= vel <= 100:
    print("Su velocidad es demasiado alta")

else:
    print("¡Cuidado! velocidad fuera de rango")



