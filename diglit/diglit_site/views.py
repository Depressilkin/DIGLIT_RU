from django.shortcuts import render, HttpResponse

# Create your views here.


def index_render(request):
    return render(request, 'index.html')


def laboratory_render(request):
    return render(request, 'laboratory.html')


def game_render(request, name):
    if name == 'catch_up':
        return render(request, 'game.html', context={'name': name})
    elif name == 'gallows':
        return render(request, 'game.html', context={'name': name})
    else:
        HttpResponse('Oh')
