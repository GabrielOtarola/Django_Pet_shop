from django import forms  # Importa el módulo de formularios de Django
from .models import Producto, Cliente, Mascota # Importa el modelo Producto desde el archivo models.py en el mismo directorio

class ProductoForm(forms.ModelForm):  # Define una clase ProductoForm que hereda de forms.ModelForm
    class Meta:  # Define una clase Meta anidada dentro de ProductoForm
        model = Producto  # Especifica que este formulario se basa en el modelo Producto
        fields = ['nombre', 'precio', 'descripcion']  # Define los campos del modelo que se incluirán en el formulario

class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ['nombre','direccion','telefono','email']


class MascotaForm(forms.ModelForm):
    class Meta:
        model = Mascota
        fields = ['nombre', 'especie', 'raza', 'fecha_nacimiento'] 