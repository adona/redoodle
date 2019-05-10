# Generated by Django 2.1.7 on 2019-05-10 18:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0010_auto_20190510_1802'),
    ]

    operations = [
        migrations.CreateModel(
            name='Invite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('poll', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='invites', to='polls.Poll')),
            ],
        ),
        migrations.AddField(
            model_name='participant',
            name='email',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AlterUniqueTogether(
            name='invite',
            unique_together={('poll', 'email')},
        ),
    ]
