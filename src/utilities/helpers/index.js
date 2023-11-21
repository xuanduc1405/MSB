import { decodeToken } from "../../_core/helpers/Utils";

export const handleCheckToken = (user, callback) => {
    const token = user ? decodeToken(user) : '';
    // TODO: check token expired after
    if (token) callback(true);
};

const helpers = { handleCheckToken };

export default helpers;