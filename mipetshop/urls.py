from django.urls import path
from .views import index, alimento_seco_gato, alimento_humedo_gato, alimento_perro, accesorios, api, lista_productos, detalle_producto, crear_producto, editar_producto, eliminar_producto, redirect_to_alimento_seco_gato, logout_view

urlpatterns = [
    path('', index, name='index'),
    path('alimento-seco-gato/', alimento_seco_gato, name='alimento_seco_gato'),
    path('alimento-humedo-gato/', alimento_humedo_gato, name='alimento_humedo_gato'),
    path('alimento-perro/', alimento_perro, name='alimento_perro'),
    path('accesorios/', accesorios, name='accesorios'),
    path('api/', api, name='api'),
    path('accounts/profile/', redirect_to_alimento_seco_gato, name='profile_redirect'),
    path('logout/', logout_view, name='logout'),
   

    path('lista/', lista_productos, name='lista_productos'),
    path('<int:pk>/', detalle_producto, name='detalle_producto'),
    path('crear/', crear_producto, name='crear_producto'),
    path('<int:pk>/editar/', editar_producto, name='editar_producto'),
    path('<int:pk>/eliminar/', eliminar_producto, name='eliminar_producto'),
]

