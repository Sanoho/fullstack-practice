from app import app
from models import db, User
# from faker import Faker
import random

# faker = Faker()


with app.app_context():


    user1 = User(username="Franco", email="Franco@yolegs.com", picture="https://www.cnet.com/a/img/resize/e9c1b6fa8df0f1795e60b960561d23163b96ad95/hub/2022/06/01/f6c1a967-a0fc-4e07-b7b0-a045c25fa279/mercedes-amg-one-production-hypercar-125.jpg?auto=webp&width=1200")
    user2 = User(username="Tim", email="Tim@yolegs.com",picture="https://images.pistonheads.com/nimg/45051/5.jpg")
    user3 = User(username="Erkut", email="Erkut@yolegs.com",picture="https://i.pinimg.com/736x/2a/47/10/2a47107a069aef4204b873e0e10716ca.jpg")
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.commit()