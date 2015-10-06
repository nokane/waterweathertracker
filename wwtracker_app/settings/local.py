import ConfigParser
import os

config = ConfigParser.RawConfigParser()
config.read('/etc/wwtracker/config.cfg')

DEBUG = True
SECRET_KEY = config.get('key', 'SECRET_KEY')

DATABASE_NAME = config.get('database', 'NAME')
DATABASE_USER = config.get('database', 'USER')
DATABASE_PASSWORD = config.get('database', 'PASSWORD')
DATABASE_HOST = config.get('database', 'HOST')
DATABASE_PORT = config.get('database', 'PORT')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': DATABASE_NAME,
        'USER': DATABASE_USER,
        'PASSWORD': DATABASE_PASSWORD,
        'HOST': DATABASE_HOST,
        'PORT': DATABASE_PORT,
    }
}

