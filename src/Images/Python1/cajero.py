#1 consignar, 2 retirar, 3 consultar saldo, 4 enviar a otra cuenta

cuenta1 = 0
cuenta2 = 0

def consignar(c1, c2):
   print("Usted va a consignar su dinero")
   return c1, c2
def retirar(c1, c2):
    print("Usted va a retirar su dinero")
    return c1, c2
def consultarSaldo(c1, c2):
    print("Usted va a consultar su saldo")
    return c1, c2
def enviarAotraCuenta(c1, c2):
    print("Usted va a enviar su dinero a otra cuenta")
    return c1, c2
print("Menú cajero")
print("1. consignar")
print("2. retirar")
print("3. consultar saldo")
print("4. enviar dinero a otra cuenta")

opcion = int(input("Digite el número de la opción que desea ejecutar: "))

if consignar == 1:
    cuenta1, cuenta2 = consignar(cuenta1, cuenta2)
    
elif retirar == 2:
    print("Usted va a retirar su dinero")
elif consultarSaldo == 3:
    print("Usted va a consultar su saldo")
elif enviarAotraCuenta == 4:
    print("Usted va a enviar su saldo a otra cuenta")
else:
    print("Error")





