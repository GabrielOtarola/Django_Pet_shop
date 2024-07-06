from django.db import models

# Modelo Producto
class Producto(models.Model):
    nombre = models.CharField(max_length=80)
    precio = models.IntegerField()
    descripcion = models.CharField(max_length=200)
