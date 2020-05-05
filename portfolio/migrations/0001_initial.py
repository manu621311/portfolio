# Generated by Django 3.0 on 2020-05-02 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Your Name', max_length=150)),
                ('email', models.EmailField(default='Your Email', max_length=100)),
                ('message', models.TextField(default='Message', null=True)),
            ],
        ),
    ]
