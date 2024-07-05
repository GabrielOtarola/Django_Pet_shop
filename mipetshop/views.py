from django.shortcuts import render

# Create your views here.
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

