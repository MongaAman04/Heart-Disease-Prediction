from flask import Flask, render_template, request ,jsonify
import numpy as np
import pickle
from flask_cors import CORS
filename = 'heart-disease-prediction-knn-model.pkl'
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

model = pickle.load(open(filename, 'rb'))
scaler = pickle.load(open('scaler.pkl', 'rb'))
# @app.route('/')
# def home():
# 	return send_from_directory(app.static_folder, 'userINteraction.jsx')
# pickle.dump(scaler, open('scaler.pkl', 'wb'))


@app.route('/submit', methods=['GET','POST'])
def predict():
    # if request.method == 'POST':

    #     age = int(request.form['age'])
    #     sex = request.form.get('sex')
    #     cp = request.form.get('cp')
    #     trestbps = int(request.form['trestbps'])
    #     chol = int(request.form['chol'])
    #     fbs = request.form.get('fbs')
    #     restecg = int(request.form['restecg'])
    #     thalach = int(request.form['thalach'])
    #     exang = request.form.get('exang')
    #     oldpeak = float(request.form['oldpeak'])
    #     slope = request.form.get('slope')
    #     ca = int(request.form['ca'])
    #     thal = request.form.get('thal')
    #  
        # data = np.array([[age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]])
        # res = request.get_json()
        # data = np.array(res)
        # print(res)
        # my_prediction = model.predict(data)
        
        # # return render_template("Frontend/src/result.jsx", prediction=my_prediction)
        # return jsonify({'message':"Data recieved sucessfully",'prediction':my_prediction})
    try:
        res = request.get_json()
        values = [float(res[key]) for key in [
            'age','sex','cp','trestbps','chol','fbs','restecg','thalach',
            'exang','oldpeak','slope','ca','thal'
        ]]
        data = np.array([values])
        # scaled_data = scaler.transform([values])
        # data = np.array(scaled_data)
        prediction = model.predict(scaled_data).tolist()
        return jsonify({'message': "Data received successfully", 'prediction': prediction})
    except Exception as e:
        return jsonify({'message': "Error processing input", 'error': str(e)}), 400
   
if __name__ == '__main__':
	app.run(debug=True)