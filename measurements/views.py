from django.shortcuts import render
from rest_framework import generics
from serializers import MeasurementSerializer
from models import Measurement

class MeasurementList(generics.ListCreateAPIView):
    model = Measurement
    serializer_class = MeasurementSerializer
    def get_queryset(self):
        bodyId = self.kwargs['bodyId']
        return Measurement.objects.filter(body__id=bodyId)
        # if state == 'all':
        #     return Water.objects.all()
        # else:
        #     return Water.objects.filter(state__name=state)
