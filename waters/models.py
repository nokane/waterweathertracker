from django.contrib.gis.db import models
from states.models import State

class Water(models.Model):
    name = models.TextField(max_length=255)
    loc = models.PointField()
    state_id = models.IntegerField()

    class Meta:
        db_table = 'water_bodies'
