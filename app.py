from flask import Flask
from flask import render_template
from flask import session
import genomelink
from api_constants import *

app = Flask(__name__)

@app.route('/')
def index():
  authorize_url = genomelink.OAuth.authorize_url(client_id=my_client_id, scope=[], callback_url=my_callback_url)
  attributes = ['eye-color', 'beard-thickness', 'morning-person']
  reports = []
  if session.get('oauth_token'):
    for name in attributes:
      reports.append(genomelink.Report.fetch(name=name, population='European', token=session['oauth_token']))
  return render_template('index.html', authorize_url=authorize_url, reports=reports)