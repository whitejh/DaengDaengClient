
import {getAuthFromCookie,getUserFromCookie} from '../../utils/cookies';
const authState = {
	auth: {
		email: getUserFromCookie || '',
		token: getAuthFromCookie || '',
		

	},
};

export default authState;
