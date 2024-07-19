from django.db import models  # Importa el módulo models de Django para definir modelos

# Modelo Producto
class Producto(models.Model):  # Define una clase Producto que hereda de models.Model
    nombre = models.CharField(max_length=80)  # Campo de texto con un máximo de 80 caracteres para el nombre del producto
    precio = models.IntegerField()  # Campo entero para el precio del producto
    descripcion = models.CharField(max_length=200)  # Campo de texto con un máximo de 200 caracteres para la descripción del producto

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=250)
    telefono  = models.CharField(max_length=50)
    email = models.EmailField()
   

class Mascota(models.Model):
    nombre = models.CharField(max_length=100)
    especie = models.CharField(max_length=100)
    raza = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()

    def __str__(self):
        return self.nombre  
