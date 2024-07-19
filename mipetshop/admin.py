from django.contrib import admin  # Importa el módulo de administración de Django
from .models import Producto  # Importa el modelo Producto desde el archivo models.py en el mismo directorio

# Register your models here.
admin.site.register(Producto)  # Registra el modelo Producto en el sitio de administración de Django
