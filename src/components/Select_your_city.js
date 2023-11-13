import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";

function Select_your_city(props) {
    const handle = e => {props.setCity(e.target.value)}
    return (
      <Fragment>
        <h3>Выберите город для эмиграции</h3>
        <Form.Select onClick={handle}>
          <option value="Moscow">Moscow</option>
          <option value="Erevan">Erevan</option>
          <option value="Tbilisi">Tbilisi</option>
          <option value="Astana">Astana</option>
          <option value="Ankara">Ankara</option>
          <option value="Ashgabat">Ashgabat</option>
        </Form.Select>
        <p>Ты выбрал {props.myCity} - хороший выбор!!</p>
      </Fragment>
    )
}

export default Select_your_city;
