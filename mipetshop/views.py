from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required, user_passes_test
from .models import Producto
from .forms import ProductoForm
from django.contrib.auth import logout

# Verificar si el usuario tiene permisos de administrador
def is_admin(user):
    return user.is_superuser

# Vistas principales
def index(request):
    return render(request, 'mipetshop/index.html')

def alimento_seco_gato(request):
    return render(request, 'mipetshop/alimento_seco_gato.html')

def alimento_humedo_gato(request):
    return render(request, 'mipetshop/alimento_humedo_gato.html')

def alimento_perro(request):
    return render(request, 'mipetshop/alimento_perro.html')

def accesorios(request):
    return render(request, 'mipetshop/accesorios.html')

def api(request):
    return render(request, 'mipetshop/api.html')

# Vistas CRUD de productos
@login_required
def lista_productos(request):
    productos = Producto.objects.all()
    return render(request, 'mipetshop/lista_productos.html', {'productos': productos})

@login_required
def detalle_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    return render(request, 'mipetshop/detalle_producto.html', {'producto': producto})

@user_passes_test(is_admin)
def crear_producto(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_productos')
    else:
        form = ProductoForm()
    return render(request, 'mipetshop/formulario_producto.html', {'form': form, 'operacion': 'Crear'})

@user_passes_test(is_admin)
def editar_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == 'POST':
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            form.save()
            return redirect('lista_productos')
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'mipetshop/formulario_producto.html', {'form': form, 'operacion': 'Editar'})

@user_passes_test(is_admin)
def eliminar_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == 'POST':
        producto.delete()
        return redirect('lista_productos')
    return render(request, 'mipetshop/confirmar_eliminacion.html', {'producto': producto})

def redirect_to_alimento_seco_gato(request):
    # Puedes realizar cualquier lógica adicional aquí antes de la redirección
    return redirect('alimento_seco_gato')  # Redirige a la vista 'alimento_seco_gato' definida en urls.py

def logout_view(request):
    logout(request)
    return redirect('index')
