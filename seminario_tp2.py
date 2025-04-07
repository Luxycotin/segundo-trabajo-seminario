def ingresar_datos():
    personas = []
    continuar = True


    cantidad = int(input("¿Cuántas personas va a desear registar? escriba un número: "))

  
    for i in range(cantidad):
        nombre = input(f"Ingresa el nombre de la persona #{i + 1}: ")
        edad = int(input(f"Ingresa la edad de {nombre}: "))
        nota = float(input(f"Ingresa la nota de {nombre}: "))

    
        personas.append([nombre, edad, nota])


    print("\nLista original de personas:")
    for persona in personas:
        print(persona)

   
    personas.sort(key=lambda x: x[2], reverse=True)

    print("\nLista ordenada por nota (de mayor a menor):")
    for persona in personas:
        print(persona)

ingresar_datos()
