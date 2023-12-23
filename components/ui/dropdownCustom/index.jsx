import React from "react";
import styles from "./style.module.scss";

const DropdownCustom = () => {
  return (
    <div className={styles.dropdownContainerStyle}>
      <div className="form-floating">
        <div class="input-group">
          <div class="input-group-prepend">
            <select
             className={`${styles.formSelect} form-select`}
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option selected>One</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        
            <input
              type="text"
              className={`${styles.floatInput} form-control`}
              id="username"
              placeholder="Phone Number*"
              required=""
            />
           
          
        </div>
      </div>
    </div>
  );
};

export default DropdownCustom;
