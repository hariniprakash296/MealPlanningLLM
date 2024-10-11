from flask import Flask
import sys

print(sys.path)

def create_app():
    app = Flask(__name__)
    
    # Import and register blueprints
    from app.components.pages.home import home_bp
    app.register_blueprint(home_bp)
    
    return app

from flask import Blueprint, render_template

home_bp = Blueprint('home', __name__)

@home_bp.route('/')
def home():
    return render_template('home.html')