from Classifier import Predictor
from sklearn import metrics
import os
import pickle
import warnings

warnings.filterwarnings('ignore')


def get_labels(model, labels, values):
    for value in values:
        labels.append(model.get_rank_label(value))
    return labels


def prediction_and_report(paths, report_path,model):

    # ==== Prediction ====
    x = paths[0]
    y = paths[1]
    y_pred = model.predict(x)
    lang_pred = get_labels(model, [], y_pred)
    lang_true = get_labels(model, [], y)

    # ==== Prediction output ====
    print("Predicted on", str(len(lang_pred)), "files. Results are as follows:")
    result = metrics.confusion_matrix(lang_true, lang_pred)
    print(result)

    report = metrics.classification_report(lang_true, lang_pred)
    print(report)

    with open(report_path, "w") as resultfile:
        resultfile.write("Predicted on " + str(len(lang_pred)) + " files. Results are as follows:\n\n")
        resultfile.write("Confusion Matrix:\n")
        for row in result:
            string = ""
            for column in row:
                string += str(column) + "\t"
            resultfile.write(string + "\n")
        resultfile.write("\nClassification Report\n")
        resultfile.write(report)


if __name__ == "__main__":
    path = './FileTypeData'  # data dir
    lang_json = './languages.json'  # languages json path
    model_dir = './'  # model output dir
    os.makedirs(model_dir, exist_ok=True)

    # ==== Training ====
    predictor = Predictor(model_dir=model_dir, lang_json=lang_json)
    train_paths, test_paths = predictor.learn(path)

    # ==== Testing ====
    print("Predicting on test")
    prediction_and_report(test_paths, "result_test.txt", predictor)
    print("Predicting on train")
    prediction_and_report(train_paths, "result_train.txt", predictor)

    # ==== Saving model ====
    filename = 'finalized_model.sav'
    pickle.dump(predictor, open(filename, 'wb'))
