from django.urls import path
from .views import index, alimento_seco_gato, alimento_humedo_gato, alimento_perro, accesorios, api

urlpatterns = [
    path('', index, name='index'),
    path('alimento-seco-gato', alimento_seco_gato, name='alimento_seco_gato'),
    path('alimento-humedo-gato/', alimento_humedo_gato, name='alimento_humedo_gato'),
    path('alimento-perro/', alimento_perro, name='alimento_perro'),
    path('accesorios/', accesorios, name='accesorios'),
    path('api/', api, name='api'),
]
