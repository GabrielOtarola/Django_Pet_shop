from django.db import models

# Modelo Producto
class Producto(models.Model):  # Define una clase Producto que hereda de models.Model
    nombre = models.CharField(max_length=80)  # Campo de texto con un máximo de 80 caracteres para el nombre del producto
    precio = models.IntegerField()  # Campo entero para el precio del producto
    descripcion = models.CharField(max_length=200)  # Campo de texto con un máximo de 200 caracteres para la descripción del producto

