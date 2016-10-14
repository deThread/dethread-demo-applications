import { browserHistory } from 'react-router';
import Spinner from './Spinner';

const Pending = function() {
	return (<div>
					<div className="card well well-lg">
						<div className="pending"> 
							<h1>Waiting for host to start . . .</h1>
							<p>There are currently 2 clients in the room.</p>
							<Spinner />
						</div> 
					</div>
				</div>
	)
};

export default Pending;
