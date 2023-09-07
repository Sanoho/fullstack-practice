from flask_restful import Api
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask import Flask, abort
from flask_sqlalchemy import SQLAlchemy
import os

from dotenv import load_dotenv
load_dotenv()


app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build',
    template_folder='../client/build'
)

db = SQLAlchemy()

bcrypt = Bcrypt(app)
migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)
