from django.shortcuts import render
from rest_framework import generics
from serializers import StateSerializer
from models import State


class StateList(generics.ListCreateAPIView):
    model = State
    queryset = State.objects.all()
    serializer_class = StateSerializer

class StateDetail(generics.RetrieveUpdateDestroyAPIView):
    model = State
    queryset = State.objects.all()
    serializer_class = StateSerializer