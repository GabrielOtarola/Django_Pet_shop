from django.shortcuts import render, get_object_or_404, redirect
# Importa las funciones render, get_object_or_404 y redirect de django.shortcuts

from django.contrib.auth.decorators import login_required, user_passes_test
# Importa los decoradores login_required y user_passes_test del módulo django.contrib.auth.decorators

from .models import Producto,Cliente,Mascota
# Importa el modelo Producto desde el archivo models.py del mismo directorio

from .forms import ProductoForm,ClienteForm,MascotaForm
# Importa el formulario ProductoForm desde el archivo forms.py del mismo directorio

from django.contrib.auth import logout, authenticate, login
# Importa las funciones logout, authenticate y login del módulo django.contrib.auth

# Verificar si el usuario tiene permisos de administrador
def is_admin(user):
    return user.is_superuser
# Define una función is_admin que verifica si el usuario es un superusuario

# Vistas principales
def index(request):
    return render(request, 'mipetshop/index.html')
# Define la vista index que renderiza la plantilla 'mipetshop/index.html'

def alimento_seco_gato(request):
    return render(request, 'mipetshop/alimento_seco_gato.html')
# Define la vista alimento_seco_gato que renderiza la plantilla 'mipetshop/alimento_seco_gato.html'

def alimento_humedo_gato(request):
    return render(request, 'mipetshop/alimento_humedo_gato.html')
# Define la vista alimento_humedo_gato que renderiza la plantilla 'mipetshop/alimento_humedo_gato.html'

def alimento_perro(request):
    return render(request, 'mipetshop/alimento_perro.html')
# Define la vista alimento_perro que renderiza la plantilla 'mipetshop/alimento_perro.html'

def accesorios(request):
    return render(request, 'mipetshop/accesorios.html')
# Define la vista accesorios que renderiza la plantilla 'mipetshop/accesorios.html'

def api(request):
    return render(request, 'mipetshop/api.html')
# Define la vista api que renderiza la plantilla 'mipetshop/api.html'

# Vistas CRUD de productos
@login_required
def lista_productos(request):
    productos = Producto.objects.all()
    return render(request, 'mipetshop/lista_productos.html', {'productos': productos})
# Define la vista lista_productos, protegida por el decorador login_required. 
# Obtiene todos los productos y los pasa a la plantilla 'mipetshop/lista_productos.html'

@login_required
def detalle_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    return render(request, 'mipetshop/detalle_producto.html', {'producto': producto})
# Define la vista detalle_producto, protegida por el decorador login_required. 
# Obtiene un producto por su clave primaria y lo pasa a la plantilla 'mipetshop/detalle_producto.html'

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
# Define la vista crear_producto, protegida por el decorador user_passes_test que verifica si el usuario es administrador.
# Maneja la creación de un nuevo producto. Si el método es POST, valida y guarda el formulario. 
# Si no, muestra un formulario vacío en la plantilla 'mipetshop/formulario_producto.html'

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
# Define la vista editar_producto, protegida por el decorador user_passes_test que verifica si el usuario es administrador.
# Maneja la edición de un producto existente. Si el método es POST, valida y guarda los cambios en el formulario. 
# Si no, muestra el formulario con los datos del producto existente en la plantilla 'mipetshop/formulario_producto.html'

@user_passes_test(is_admin)
def eliminar_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == 'POST':
        producto.delete()
        return redirect('lista_productos')
    return render(request, 'mipetshop/confirmar_eliminacion.html', {'producto': producto})
# Define la vista eliminar_producto, protegida por el decorador user_passes_test que verifica si el usuario es administrador.
# Maneja la eliminación de un producto existente. Si el método es POST, elimina el producto y redirige a la lista de productos. 
# Si no, muestra una plantilla de confirmación 'mipetshop/confirmar_eliminacion.html'

def redirect_to_alimento_seco_gato(request):
    # Puedes realizar cualquier lógica adicional aquí antes de la redirección
    return redirect('alimento_seco_gato')  # Redirige a la vista 'alimento_seco_gato' definida en urls.py
# Define la vista redirect_to_alimento_seco_gato que redirige a la vista 'alimento_seco_gato'

def logout_view(request):
    logout(request)
    return redirect('index')
# Define la vista logout_view que cierra la sesión del usuario y lo redirige a la página de inicio

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')  # Redirige a la página de inicio o a donde desees
        else:
            return render(request, 'registration/login.html', {'error_message': 'Nombre de usuario o contraseña incorrectos.'})
    return render(request, 'registration/login.html')
# Define la vista login_view que maneja la autenticación de usuarios. 
# Si el método es POST, intenta autenticar al usuario. Si las credenciales son correctas, inicia sesión y redirige a la página de inicio. 
# Si no, muestra un mensaje de error en la plantilla 'registration/login.html'. Si el método no es POST, simplemente muestra la plantilla de inicio de sesión.

# Vistas para Clientes
@login_required
def lista_clientes(request):
    clientes = Cliente.objects.all()
    return render(request, 'mipetshop/lista_clientes.html', {'clientes': clientes})


@login_required
def detalle_cliente(request, pk):
    cliente = get_object_or_404(Cliente, pk=pk)
    return render(request, 'mipetshop/detalle_cliente.html', {'cliente': cliente})



@user_passes_test(is_admin)
def crear_cliente(request):
    if request.method == "POST":
        form = ClienteForm(request.POST)
        if form.is_valid():
            cliente = form.save()
            return redirect('detalle_cliente', pk=cliente.pk)
    else:
        form = ClienteForm()
    return render(request, 'mipetshop/formulario_clientes.html', {'form': form})


@user_passes_test(is_admin)
def editar_cliente(request, pk):
    cliente = get_object_or_404(Cliente, pk=pk)
    if request.method == 'POST':
        form = ClienteForm(request.POST, instance=cliente)
        if form.is_valid():
            form.save()
            return redirect('lista_cliente')
    else:
        form = ClienteForm(instance=cliente)
    return render(request, 'mipetshop/formulario_cliente.html', {'form': form, 'operacion': 'Editar'})



@user_passes_test(is_admin)
def cliente_delete(request, pk):
    cliente = get_object_or_404(Cliente, pk=pk)
    if request.method == 'POST':
        cliente.delete()
        return redirect('cliente_list')
    return render(request, 'mipetshop/cliente_confirm_delete.html', {'cliente': cliente})

#vistas de mascota
@login_required
def lista_mascotas(request):
    mascotas = Mascota.objects.all()
    return render(request, 'mipetshop/lista_mascotas.html', {'mascotas': mascotas})

@login_required
def detalle_mascota(request, pk):
    mascota = get_object_or_404(Mascota, pk=pk)
    return render(request, 'mipetshop/detalle_mascota.html', {'mascota': mascota})


@user_passes_test(is_admin)
def crear_mascota(request):
    if request.method == "POST":
        form = MascotaForm(request.POST)
        if form.is_valid():
            mascota = form.save()
            return redirect('detalle_mascota', pk=mascota.pk)
    else:
        form = MascotaForm()
    return render(request, 'mipetshop/formulario_mascotas.html', {'form': form})


@user_passes_test(is_admin)
def editar_mascota(request, pk):
    mascota = get_object_or_404(Mascota, pk=pk)
    if request.method == "POST":
        form = MascotaForm(request.POST, instance=mascota)
        if form.is_valid():
            mascota = form.save()
            return redirect('detalle_mascota', pk=mascota.pk)
    else:
        form = MascotaForm(instance=mascota)
    return render(request, 'mipetshop/formulario_mascotas.html', {'form': form})


@user_passes_test(is_admin)
def mascota_delete(request, pk):
    mascota = get_object_or_404(Mascota, pk=pk)
    mascota.delete()
    return redirect('lista_mascotas')