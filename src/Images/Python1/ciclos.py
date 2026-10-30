#bucle for
numero = int(input("Digite el número"))
for i in range(numero, 0, -1):
    print(i)

num = int(input("Digite el número que desea multiplicar: "))

print(f"--- Tabla del número {num} ---")

for i in range(1, 11):
    resultado = num * i
    print(f"{num} x {i} = {resultado}")

for i in range(1, 21):
    if i % 2 == 0:
        print("Los números son pares")
    else:
        print("Son impares")


