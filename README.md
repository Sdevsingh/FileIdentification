# FileIdentification
The static metric changes between code revisions made in version control 
systems. Included with each revision is the time at which the revision was committed. Because the time 
spent between commits can be spent on more than one task, the time between commits is not necessarily 
reflective of the time spent making the change.

One of the challenges faced was how to identify the language of the file. File extensions are a good way of 
identifying the language that has been used but there are some situations when a developer uses a nonstandard file extension, such as the name of the component it relates to or doesn’t add a file extension at all. This makes it hard, in these cases, to know which parser should be used to gather the static metrics.

# Folder Strcuture
1. FileTypeData – Folder 
2. FileTypeData_Test – Folder
3. languages.json, keywords.json
4. CheckFileUnicode.py – removes any files that are not UTF-8 encoded.
5. Classifier.py, FeatureExtract.py, Proccess.py are libraries and dependencies.
6. main.py is the main script. It contains training and predictions steps and writes the result to a 
results.txt file. It also saves the model as ‘finalized_model.sav’.
7. test.py is the testing script used validate our model predictions. FileTypeData_Test is used by 
this script.

# Steps to Run the Script:
1. Define paths for FileTypeData and FileTypeData_Test in CheckFileUnicode.py.
2. Run CheckFileUnicode.py to clean the datasets.
3. Define paths for FileTypeData and languages.json in main.py
4. Run main.py to train the model and save it has “finalized_model.sav”. Two new files 
‘result_train.txt’ and ‘result.test.txt’ will be created.
5. Define paths for FileTypeData_Test and languages.json in main.py
6. Run test.py to validate results. It loads “finalized_model.sav”. (Please note that you don’t run 
test.py before main.py as “finalized_model.sav” will not be created.
