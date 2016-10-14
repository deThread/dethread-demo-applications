const CharsetDropDown = function() {
  return (
    <div>
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Charset
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu charset-dropdown" aria-labelledby="dropdownMenu1">
          <li><a href="#">Lowercase characters</a></li>
          <li><a href="#">Uppercase & Lowercase characters</a></li>
          <li><a href="#">Alphanumeric (upper and lowercase)</a></li> 
        </ul>
      </div>
    </div>
    );
};

export default CharsetDropDown;
