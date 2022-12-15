
import os, sys
from distutils.core import setup, Extension

support_dir = os.path.normpath(
                   os.path.join(
			sys.prefix,
			'share',
			'python%d.%d' % (sys.version_info[0],sys.version_info[1]),
			'CXX') )

print 'sys.prefix = ', sys.prefix
print 'support_dir = ', support_dir

if os.name == 'posix':
	CXX_libraries = ['stdc++','m']
else:
	CXX_libraries = []

setup (name = "LMTO_DMFT",
       version = "1.0",
       maintainer = "Kristjan Haule",
       maintainer_email = "haule@physics.rutgers.edu",
       description = "Some Python extensions written in C++",
       url = "http://physics.rutgers.edu:~/haule/",
       
       ext_modules = [
	Extension('gutils',
		  sources = [ 'gutils.cxx',
			      os.path.join(support_dir,'cxxsupport.cxx'),
			      os.path.join(support_dir,'cxx_extensions.cxx'),
			      os.path.join(support_dir,'IndirectPythonInterface.cxx'),
			      os.path.join(support_dir,'cxxextensions.c')
			      ],
		  )
	]
       )
