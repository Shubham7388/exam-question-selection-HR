import React, { useState } from "react";
import UserQuestions from "./UserQuestions";
const ExaminationPage = () => {
  const [maxQuestion, setMaxQuestion] = useState(0);

  const [questionType, setQuestionType] = useState({
    mcq: "",
    programming: "",
    descriptive: "",
  });
  const [selectedTech, setSelectedTech] = useState("");
  const [questionsCount, setQuestionCount] = useState({
    mcq: 0,
    programming: 0,
    descriptive: 0,
  });

  let allQuestion =
    questionsCount.mcq +
    questionsCount.programming +
    questionsCount.descriptive;
  const technologies = ["java", "python", "javascript", "c++", "php"];
  function checkBoxHandle(e) {
    const { checked, name } = e.target;

    checked
      ? setQuestionType({ ...questionType, [name]: name })
      : setQuestionType({ ...questionType, [name]: "" });
  }
  return (
    <div className="main">
      <nav className="headtag">
        <img
          src="https://cdn.vectorstock.com/i/preview-1x/22/40/exams-icon-thin-line-exam-icon-from-vector-47142240.webp"
          alt=""
        />
        <h3 className="heading1">Online Examination Portal</h3>
      </nav>
      <div>
        <h3 className="static">All Questions Details for Examination system</h3>

        <div className="static">Statically fill Question's Details</div>
        <form action="">
          <input
            type="text"
            placeholder="Enter Max Question"
            className="input1"
            onChange={(e) => setMaxQuestion(parseInt(e.target.value))}
          />
          <br />

          {maxQuestion ? (
            <select
              name="technologies"
              className="selTag"
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              <option value="" selected disabled>
                Select Technology
              </option>

              {technologies.map((ele, index) => {
                return <option value={ele}>{ele.toUpperCase()}</option>;
              })}
            </select>
          ) : (
            ""
          )}

          <div>
            {selectedTech ? <label>Question's Type: </label> : ""}
            {selectedTech
              ? Object.keys(questionType).map((ele, index) => {
                  return (
                    <>
                      <label htmlFor="">{ele}</label>
                      <input
                        type="checkbox"
                        name={ele}
                        onClick={(e) => checkBoxHandle(e)}
                      />
                    </>
                  );
                })
              : ""}

            {questionType.mcq ? (
              <div>
                <input
                  type="number"
                  placeholder="enter MCQ question count"
                  onChange={(e) =>
                    setQuestionCount({
                      ...questionsCount,
                      mcq: Number(e.target.value),
                    })
                  }
                />
              </div>
            ) : (
              ""
            )}
            {questionType.programming ? (
              <div>
                <input
                  type="number"
                  placeholder="enter Programming question count"
                  onChange={(e) =>
                    setQuestionCount({
                      ...questionsCount,
                      programming: Number(e.target.value),
                    })
                  }
                />
              </div>
            ) : (
              ""
            )}
            {questionType.descriptive ? (
              <div>
                <input
                  type="number"
                  placeholder="enter Descriptive question count"
                  onChange={(e) =>
                    setQuestionCount({
                      ...questionsCount,
                      descriptive: Number(e.target.value),
                    })
                  }
                />
              </div>
            ) : (
              ""
            )}
            <UserQuestions />
          </div>

          {allQuestion && allQuestion === maxQuestion ? (
            <button className="btn1">Submit</button>
          ) : allQuestion > maxQuestion ? (
            alert("Limit Exceed")
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};
export default ExaminationPage;
