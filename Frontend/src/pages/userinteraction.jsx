import axios from "axios";
import { useState,useEffect } from "react"
// import { Result } from "./result";
import { NavLink } from "react-router"
import { useNavigate } from "react-router-dom";
import { Result } from "./result";
export const UserInteraction = ()=>{
  // const navigate = useNavigate();
    const [data , setData] = useState({
        age : "",
        sex : "",
        cp : "",
        trestbps : "",
        chol : "",
        fbs : "",
        restecg : "",
        thalach : "",
        exang : "",
        oldpeak : "",
        slope : "",
        ca : "",
        thal : ""
    })
     const [prediction ,setPridiction] = useState("");

    const handleChange = (e)=>{
      setData({
        ...data,
       [e.target.name] : e.target.value
      })
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      // try {
      //     const response = await fetch('http://localhost:5000/submit', {
      //         method: 'POST',
      //         headers: {
      //             'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(data),
      //     });
      //     const result = await response.json();
      //     setPridiction(result.prediction)
      //     console.log(result.message);
          
      // } catch (error) {
      //   console.log(error);
      //   setPridiction(error)
      // }
      try {
        const reponse = await axios.post(
          'http://localhost:5000/submit', 
          data,
          {
            headers: {
          'Content-Type': 'application/json',
        },
      //  body: JSON.stringify(data),
      });
        setPridiction(reponse.data.prediction[0]);
        console.log(reponse.data.prediction[0])
        console.log(data);
        // <Result prediction={prediction} data={data} />
        // navigate("/result", { state: { prediction: reponse.data.prediction } });
      } catch (error) {
        console.log(error);
        console.log(error.response);
        setPridiction("Error in prediction");
      }
  };


  if (prediction == "1") {
    // if (data.fbs == "1") {
    //   return(
    //     <div className="background h-[87vh] flex justify-center items-center text-white font-bold text-3xl relative">
    //         <img className="absolute z-0 opacity-40 scale-125" src="src\images\realistic-heart-shape-studio 1.png" alt="" />
    //        <h1 className="z-10 absolute">OOP's,Your heart is not fine, Consult a doctor.</h1>
    //     </div>
    // )
    // }
  return(
        <div className="background h-[87vh] flex justify-center items-center text-white font-bold text-xl md:text-3xl text-center px-4 relative">
            <img className="absolute z-0 opacity-40 w-full h-auto object-contain max-w-[600px]" src="src/images/realistic-heart-shape-studio 1.png" alt="" />
           <h1 className="z-10 absolute">{data.fbs=="1"?"OOP's,Your heart is not fine, Consult a doctor.":"Hurrah,Your heart is totally fine, Take care of Heart like that."}</h1>
        </div>
    )
  }
  
  else return (
    <div className="background h-full px-4 py-6">
     
      <form onSubmit={handleSubmit} > 
        <div className="font-bold text-white  border-5 border-white rounded">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-10">

        
        <label for="age">Age</label>
        <input type="text" id="age" name="age" placeholder="Your age.." value={data.age} onChange={handleChange}/>



        <label for="sex">Sex</label>
        <select id="sex" name="sex" value={data.sex} onChange={handleChange}>
          <option selected>----select option----</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>



        <label for="cp">Chest Pain Type</label>
        <select id="cp" name="cp" value={data.cp} onChange={handleChange}>
          <option selected>----select option----</option>
          <option value="0">Typical Angina</option>
          <option value="1">Atypical Angina</option>
          <option value="2">Non-anginal Pain</option>
          <option value="3">Asymtomatic</option>
        </select>



        <label for="trestbps">Resting Blood Pressure</label>
        <input type="text" id="trestbps" name="trestbps" placeholder="A number in range [94-200] mmHg" value={data.trestbps} onChange={handleChange}/>


        <label for="chol">Serum Cholesterol</label>
        <input type="text" id="chol" name="chol" value={data.chol} onChange={handleChange} placeholder="A number in range [126-564] mg/dl"/>



        <label for="fbs">Fasting Blood Sugar</label>
        <select id="fbs" name="fbs" value={data.fbs} onChange={handleChange}>
          <option selected>----select option----</option>
          <option value="1">Greater than 120 mg/dl</option>
          <option value="0">Less than 120 mg/dl</option>
        </select>



        <label for="restecg">Resting ECG Results</label>
        <select id="restecg" name="restecg" value={data.restecg} onChange={handleChange}>
          <option selected>----select option----</option>
          <option value="0">Normal</option>
          <option value="1">Having ST-T wave abnormality</option>
          <option value="2">Probable or definite left ventricular
            hypertrophy</option>
        </select>



        <label for="thalach">Max Heart Rate </label>
        <input type="text" id="thalach" name="thalach" value={data.thalach} onChange={handleChange} placeholder="A number in range [71-202] bpm"/>


        <label for="exang">Exercise-induced Angina</label>
        <select id="exang" name="exang" value={data.exang} onChange={handleChange}>
          <option selected>----select option----</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>


        <label for="oldpeak">ST depression</label>
        <input type="text" id="oldpeak" name="oldpeak" value={data.oldpeak} onChange={handleChange} placeholder="ST depression, typically in [0-6.2]"/>



        <label for="slope">slope of the peak exercise ST segment</label>
        <select id="slope" name="slope" value={data.slope} onChange={handleChange}>
          <option selected>----select option----</option>
          <option value="0">Upsloping</option>
          <option value="1">Flat</option>
          <option value="2">Downsloping</option>
        </select>
        

        <label for="ca">Number of Major vessels</label>
        <input type="text" id="ca" name="ca" value={data.ca} onChange={handleChange} placeholder="Typically in [0-4]"/> 
                          


        <label for="thal">Thalassemia</label> 
        <select id="thal" name="thal" value={data.thal} onChange={handleChange}>
          <option selected>----select option----</option>
          <option value="0">Normal</option>
          <option value="1">Fixed Defect</option> 
          <option value="2">Reversible Defect</option>  
        </select>
        </div>
        {/* <NavLink to="/result"> */}
      <button type="submit" className=" w-40 h-10 bg-[#E9C2CC] mx-auto block text-black mb-5 hover:scale-105 transition-transform duration-300 rounded-2xl">Predict</button>
        {/* </NavLink> */}
        </div>
    </form>
    </div>
    )
}