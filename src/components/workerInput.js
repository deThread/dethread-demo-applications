const WorkerInput = function(props) {
  return (
    <div>
      <input type="number" id="workers" name="length" placeholder="number of workers" value={props.workers} min='0' max='8' onChange={props.update} />
    </div>
  )
};

export default WorkerInput;
