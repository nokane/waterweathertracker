from django.shortcuts import render
from rest_framework import generics
from serializers import WaterSerializer
from models import Water

class WaterList(generics.ListCreateAPIView):
    model = Water
    queryset = Water.objects.all()
    serializer_class = WaterSerializer

# class StateDetail(generics.RetrieveUpdateDestroyAPIView):
#     model = State
#     queryset = State.objects.all()
#     serializer_class = StateSerializer
