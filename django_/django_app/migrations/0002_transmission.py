# Generated by Django 4.2 on 2023-05-04 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transmission',
            fields=[
                ('id', models.AutoField(db_column='id', primary_key=True, serialize=False)),
                ('type', models.CharField(max_length=50, null=True)),
            ],
        ),
    ]