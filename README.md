# FileIdentification

n the static metric changes between code revisions made in version control 
systems. Included with each revision is the time at which the revision was committed. Because the time 
spent between commits can be spent on more than one task, the time between commits is not necessarily 
reflective of the time spent making the change.
One of the challenges faced was how to identify the language of the file. File extensions are a good way of 
identifying the language that has been used but there are some situations when a developer uses a nonstandard file extension, such as the name of the component it relates to or doesn’t add a file extension at 
all. This makes it hard, in these cases, to know which parser should be used to gather the static metrics.
