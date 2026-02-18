import os
from dotenv import load_dotenv

load_dotenv() # get variables from .env

# Base directories
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)    

class Config:
    # DB config - use .env values
    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_USER = os.getenv("DB_USER", "root")
    DB_PASSWORD = os.getenv("DB_PASSWORD", "")
    DB_NAME = os.getenv("DB_NAME", "MeetDatabase")

    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Suppresses a deprecation warning

    # JWT — used for protecting routes after login
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "dev-secret-change-in-production")

    # Flask
    DEBUG = os.getenv("FLASK_ENV", "production") == "development"
    SECRET_KEY = os.getenv("JWT_SECRET_KEY", "dev-secret-change-in-production")


class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):
    DEBUG = False


# Easy lookup by name — used in app factory
config_map = {
    "development": DevelopmentConfig,
    "production": ProductionConfig,
}
