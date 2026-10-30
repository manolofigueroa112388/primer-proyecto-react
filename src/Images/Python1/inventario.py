#hacer el inventario para un supermercado; hacer funciones como, ingresar productos, registro de ventas, existencias
#salida de productos, usuario inicio sesión 

usuario = "Manolo"
contrasena = 1234

lista_productos = []
lista_cantidades = []
lista_precios = []

def InicioSesion():
    print("--- INICIO DE SESIÓN ---")
    CuentaUsuario = input("Ingrese su usuario: ")
#try: Envuelves dentro del bloque try el código que podría causar un error (por ejemplo, 
# onectar con un servidor, leer un archivo o realizar una operación matemática compleja).
#(Capturar): Si ocurre un error dentro de try, la ejecución del código normal se interrumpe
#y salta inmediatamente al bloque catch. Aquí defines qué hacer cuando sucede ese error.
    try:
        Cuentacontrasena = int(input("Ingrese su contraseña: "))
    except ValueError:
        print("La contraseña debe ser un número.\n")
        return False

    if CuentaUsuario == usuario and Cuentacontrasena == contrasena:
        print("Ingreso autorizado\n")
        return True
    else:
        print("Ingreso no autorizado\n")
        return False
#En lenguajes de programación como Python, .strip().capitalize() 
#es una combinación de dos métodos de texto (string) muy útil para limpiar y formatear las entradas de los usuarios.
#Se suele usar cuando estás pidiendo datos por consola o formularios y quieres asegurarte de que el texto quede prolijo.
def IngresarProducto():
    print("\n--- INGRESAR PRODUCTO ---")
    nombre = input("Ingrese el nombre del producto: ").strip().capitalize()
    
    try:
        cantidad = int(input("Ingrese la cantidad del producto: "))
        precio = float(input("Ingrese el valor unitario: "))
    except ValueError:
        print("Error: Ingrese valores numéricos válidos para la cantidad y el precio.")
        return

    # Corrección de la estructura condicional que estaba incompleta
    if nombre in lista_productos:
        indice = lista_productos.index(nombre)
        lista_cantidades[indice] += cantidad
        lista_precios[indice] = precio
        print(f"El producto '{nombre}' ya existía. Se han sumado {cantidad} unidades al inventario.")
    else:
        lista_productos.append(nombre)
        lista_cantidades.append(cantidad)
        lista_precios.append(precio)
        print(f"Producto '{nombre}' ingresado exitosamente.")

def VerExistencias():
    print("\n--- INVENTARIO / EXISTENCIAS ---")
    if len(lista_productos) == 0:
        print("No hay productos registrados en el inventario.")
    else:
        print(f"{'PRODUCTO':<15} | {'CANTIDAD':<10} | {'PRECIO UNITARIO':<15}")
        print("-" * 46)
        for i in range(len(lista_productos)):
            print(f"{lista_productos[i]:<15} | {lista_cantidades[i]:<10} | ${lista_precios[i]:<14.2f}")
        print("-" * 46)

def RegistrarVenta():
    print("\n--- REGISTRO DE VENTAS ---")
    VerExistencias()
    if len(lista_productos) == 0:
        return
    
    nombre = input("\nIngrese el nombre del producto que desea vender: ").strip().capitalize()
    
    if nombre in lista_productos:
        indice = lista_productos.index(nombre)
        try:
            cantidad_venta = int(input("Ingrese la cantidad a vender: "))
        except ValueError:
            print("Error: Ingrese un número entero válido.")
            return
        
        if cantidad_venta <= lista_cantidades[indice]:
            lista_cantidades[indice] -= cantidad_venta
            total_pagar = cantidad_venta * lista_precios[indice]
            print(f"¡Venta exitosa! Total a pagar: ${total_pagar:.2f}")
            print(f"Stock restante de '{nombre}': {lista_cantidades[indice]}")
        else:
            print("Error: No hay suficiente stock disponible para realizar la venta.")
    else:
        print("El producto no se encuentra registrado en el inventario.")

def SalidaProductos():
    print("\n--- SALIDA DE PRODUCTOS (Merma, Daños, etc.) ---")
    VerExistencias()
    if len(lista_productos) == 0:
        return
    
    nombre = input("\nIngrese el nombre del producto para registrar su salida: ").strip().capitalize()
    
    if nombre in lista_productos:
        indice = lista_productos.index(nombre)
        try:
            cantidad_salida = int(input("Ingrese la cantidad que sale del inventario: "))
        except ValueError:
            print("Error: Ingrese un número entero válido.")
            return
        
        if cantidad_salida <= lista_cantidades[indice]:
            lista_cantidades[indice] -= cantidad_salida
            print(f"Salida registrada con éxito. Nuevo stock de '{nombre}': {lista_cantidades[indice]}")
        else:
            print("Error: La cantidad de salida supera el stock actual.")
    else:
        print("El producto no se encuentra registrado.")

def MenuPrincipal():
    if InicioSesion():
        while True:
            print("\n--- MENÚ PRINCIPAL ---")
            print("1. Ingresar producto")
            print("2. Ver existencias")
            print("3. Registrar venta")
            print("4. Salida de productos")
            print("5. Salir")
            
            opcion = input("Seleccione una opción (1-5): ")
            
            if opcion == "1":
                IngresarProducto()
            elif opcion == "2":
                VerExistencias()
            elif opcion == "3":
                RegistrarVenta()
            elif opcion == "4":
                SalidaProductos()
            elif opcion == "5":
                print("Cerrando sesión. ¡Hasta luego!")
                break
            else:
                print("Opción inválida. Por favor, ingrese un número del 1 al 5.")

# Ejecución del programa
MenuPrincipal()