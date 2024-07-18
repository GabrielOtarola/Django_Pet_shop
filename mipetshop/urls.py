from django.urls import path  # Importa la función path para definir las rutas URL
from .views import login_view, logout_view, index, alimento_seco_gato, alimento_humedo_gato, alimento_perro, accesorios, api, lista_productos, detalle_producto, crear_producto, editar_producto, eliminar_producto, redirect_to_alimento_seco_gato
# Importa las vistas desde el archivo views.py del mismo directorio

urlpatterns = [
    path('', index, name='index'),  # Define la ruta para la página de inicio, que usa la vista 'index'
    path('alimento-seco-gato/', alimento_seco_gato, name='alimento_seco_gato'),  # Define la ruta para la página de alimentos secos para gatos, que usa la vista 'alimento_seco_gato'
    path('alimento-humedo-gato/', alimento_humedo_gato, name='alimento_humedo_gato'),  # Define la ruta para la página de alimentos húmedos para gatos, que usa la vista 'alimento_humedo_gato'
    path('alimento-perro/', alimento_perro, name='alimento_perro'),  # Define la ruta para la página de alimentos para perros, que usa la vista 'alimento_perro'
    path('accesorios/', accesorios, name='accesorios'),  # Define la ruta para la página de accesorios, que usa la vista 'accesorios'
    path('api/', api, name='api'),  # Define la ruta para la página de la API, que usa la vista 'api'
    path('accounts/profile/', redirect_to_alimento_seco_gato, name='profile_redirect'),  # Redirige la ruta del perfil de usuario a la vista 'redirect_to_alimento_seco_gato'
    path('login/', login_view, name='login'),  # Define la ruta para la página de inicio de sesión, que usa la vista 'login_view'
    path('logout/', logout_view, name='logout'),  # Define la ruta para la página de cierre de sesión, que usa la vista 'logout_view'
    path('lista/', lista_productos, name='lista_productos'),  # Define la ruta para la lista de productos, que usa la vista 'lista_productos'
    path('<int:pk>/', detalle_producto, name='detalle_producto'),  # Define la ruta para el detalle del producto, que usa la vista 'detalle_producto' y espera un parámetro entero 'pk'
    path('crear/', crear_producto, name='crear_producto'),  # Define la ruta para crear un producto, que usa la vista 'crear_producto'
    path('<int:pk>/editar/', editar_producto, name='editar_producto'),  # Define la ruta para editar un producto, que usa la vista 'editar_producto' y espera un parámetro entero 'pk'
    path('<int:pk>/eliminar/', eliminar_producto, name='eliminar_producto'),  # Define la ruta para eliminar un producto, que usa la vista 'eliminar_producto' y espera un parámetro entero 'pk'
]
