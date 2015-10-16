from rest_framework import serializers
from models import Water

class WaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Water
        fields = ('id', 'name', 'loc', 'state_id')

        def __unicode__(self):
          return '{0}'.format(self.content)
      
