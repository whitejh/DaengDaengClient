import { getAuthFromCookie } from '../../utils/cookies';
const authState = {
	auth: {
		email: '',
		token: getAuthFromCookie || '',
	},
};

export default authState;
