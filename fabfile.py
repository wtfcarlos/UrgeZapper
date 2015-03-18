from __future__ import with_statement
from fabric.api import *
from fabric.context_managers import shell_env

env.user = 'root'
env.hosts = ['urgezapper.com']

def deploy():
	code_dir = '/usr/share/nginx/html'
	#local('grunt build')
	put('dist', code_dir)