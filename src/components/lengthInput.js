const LengthInput = function(props) {
  return (
    <div>
      <input type="number" id="length" name="length" placeholder="length" value={props.len} min='0' onChange={props.update} />
    </div>
  )
};

export default LengthInput;
