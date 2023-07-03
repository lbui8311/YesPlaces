from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import permissions
from django.contrib.auth.models import User
from polls.serializers import UserSerializer
from polls.serializers import RestaurantSerializer
from .serializers import *
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .models import *

# Get questions and display them
def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/index.html', context)

# Show specific question and choices
def detail(request, question_id):
  try:
    question = Question.objects.get(pk=question_id)
  except Question.DoesNotExist:
    raise Http404("Question does not exist")
  return render(request, 'polls/detail.html', { 'question': question })

# Get question and display results
def results(request, question_id):
  question = get_object_or_404(Question, pk=question_id)
  return render(request, 'polls/results.html', { 'question': question })

# Vote for a question choice
def vote(request, question_id):
    # print(request.POST['choice'])
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
    


class ReactView(APIView):
   def get(self, request):
      output = [{"username": output.username, "password": output.password}
                for output in React.objects.all()]
      return Response(output)
   def post(self, request):
      serializers = ReactSerializer(data=request.data)
      if serializers.is_valid(raise_exception=True):
         serializers.save()
         return Response(serializers.data)
      


class UserViewSet(viewsets.ModelViewSet):
   queryset = User.objects.all().order_by('-date_joined')
   serializer_class = UserSerializer
   permission_classes = [permissions.AllowAny]

class RestaurantViewSet(viewsets.ModelViewSet):
   queryset = Restaurant.objects.all().order_by('-id')
   serializer_class = RestaurantSerializer
   permission_classes = [permissions.AllowAny]

class PetRestaurantViewSet(viewsets.ModelViewSet):
   queryset = PetRestaurant.objects.all().order_by('-id')
   serializer_class = PetRestaurantSerializer
   permission_classes = [permissions.AllowAny]

class RecipeViewSet(viewsets.ModelViewSet):
   queryset = Recipe.objects.all().order_by('-id')
   serializer_class = RecipeSerializer
   permission_classes = [permissions.AllowAny]

class HotelViewSet(viewsets.ModelViewSet):
   queryset = Hotel.objects.all().order_by('-id')
   serializer_class = HotelSerializer
   permission_classes = [permissions.AllowAny]

class ProfileViewSet(viewsets.ModelViewSet):
   queryset = Profile.objects.all().order_by('-id')
   serializer_class = ProfileSerializer
   permission_classes = [permissions.AllowAny]

class ProfilePlaceViewSet(viewsets.ModelViewSet):
   queryset = ProfilePlace.objects.all().order_by('-id')
   serializer_class = ProfilePlaceSerializer
   permission_classes = [permissions.AllowAny]


class ProfileRecipeViewSet(viewsets.ModelViewSet):
   queryset = ProfileRecipe.objects.all().order_by('-id')
   serializer_class = ProfileRecipeSerializer
   permission_classes = [permissions.AllowAny]

# @api_view(['POST'])
# def submit_comment(request):
#     serializer = CommentSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=201)
#     return Response(serializer.errors, status=400)

class LoginView(APIView):
   permission_classes = (IsAuthenticated,)
   def get(self, request):
      content = {'message': 'Welcome to the JWT Authentication page using React JS and Django!'}
      return Response(content)

class LogoutView(APIView):
   permission_classes = (IsAuthenticated,)
   def post(self, request):
      try:
         refresh_token = request.data["refresh_token"]
         token = RefreshToken(refresh_token)
         token.blacklist()
         return Response(status=status.HTTP_205_RESET_CONTENT)
      except Exception as e:
         return Response(status=status.HTTP_400_BAD_REQUEST)