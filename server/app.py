from models import User
from config import api, app, db, abort
from flask_restful import Resource
from flask import request, make_response, session


class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)


api.add_resource(Users, '/users')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
