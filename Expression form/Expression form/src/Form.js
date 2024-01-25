import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpressionEngine = () => {
 const [connectorType, setConnectorType] = useState('AND');
 const [expressions, setExpressions] = useState([{ ruleType: '', operator: '', value: '', score: '' }]);
 const handleConnectorTypeChange = (e) => {
   setConnectorType(e.target.value);
 };
 const handleExpressionChange = (index, field, value) => {
   const newExpressions = [...expressions];
   newExpressions[index][field] = value;
   setExpressions(newExpressions);
 };
 const addExpression = () => {
   setExpressions([...expressions, { ruleType: '', operator: '', value: '', score: '' }]);
 };
 const deleteExpression = (index) => {
   const newExpressions = [...expressions];
   newExpressions.splice(index, 1);
   setExpressions(newExpressions);
 };

 return (
<div className="container mt-5">
  <h1>Expression Form</h1>
<form >
<div className="form-group d-flex">
<label htmlFor="connectorType">Connector Type:</label>
<select
           className="form-control"
           id="connectorType"
           name="connectorType"
           value={connectorType}
           onChange={handleConnectorTypeChange}
>
<option value="AND">AND</option>
<option value="OR">OR</option>
</select>
</div>
       {expressions.map((expression, index) => (
<div key={index} className="mb-3  form-group">
<label >Expression {index + 1}:</label>

<label>Rule Type</label>
<select
             className="form-control"
             value={expression.ruleType}
             onChange={(e) => handleExpressionChange(index, 'ruleType', e.target.value)}
>

             <option>Age</option>
             <option>Credit Score</option>
             <option>Account Balance</option>
</select >
<label>Operator:</label>
<select class="form-control" >
<option>&gt;</option>
<option >&lt;</option>
<option >=&gt;</option>
<option >=&lt;</option>
<option >=</option>
</select>
Value:<input class="form-control" />
Score:<input class="form-control" />

<button type="button" className="btn btn-danger mt-2 " onClick={() => deleteExpression(index)}>
             Delete
</button>
</div>
       ))}
<button type="button" className="btn btn-primary mt-3 " onClick={addExpression}>
         Add Expression
</button>
<button type="submit" className="btn btn-success mt-3 ">
         Submit
</button>
</form>
</div>
 );
};
export default ExpressionEngine;