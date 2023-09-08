---Client FrontEnd---

npx create-react-app AppName

npm install
npm start

---Server BackEnd---
python3 -m venv venv
pip install Flask Flask-SQLAlchemy
export FLASK_APP=app.py 

flask db init
flask db migrate
flask db upgrade
python seed.py
python app.py