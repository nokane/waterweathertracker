from rest_framework import serializers
from models import Water

class WaterSerializer(serializers.ModelSerializer):
    state = serializers.StringRelatedField()

    class Meta:
        model = Water
        fields = ('id', 'name', 'loc', 'state')

        def __unicode__(self):
          return '{0}'.format(self.content)
      
