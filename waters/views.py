from django.shortcuts import render
from rest_framework import generics
from serializers import WaterSerializer
from models import Water

class WaterList(generics.ListCreateAPIView):
    model = Water
    serializer_class = WaterSerializer
    def get_queryset(self):
        state = self.kwargs['state']
        if state == 'all':
            return Water.objects.all()
        else:
            return Water.objects.filter(state__name=state)
