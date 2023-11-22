import React,{useState} from "react";


const AddNewProjectForm = ({ setvalueModel, projectNameis, setValue,handlesubmit }) => {
  const handleclick = () => {
    setvalueModel(false);
  };

  
  return (
    <>
      <form className="projectForm" onSubmit={handlesubmit}>
        <h3>New Project</h3>
        <input
          type="text"
          value={projectNameis}
          onChange={(e)=>setValue(e.target.value)}
          placeholder="Add New Project..."
          autoFocus
        />
        <div className="button-container">
          <button className="cancel" role="button" onClick={() => handleclick}>
            Cancel
          </button>
          <button className="confirm" type="submit">Add</button>
        </div>
      </form>
    </>
  );
};

export default AddNewProjectForm;
