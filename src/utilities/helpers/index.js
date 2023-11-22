import { decodeToken } from "../../_core/helpers/Utils";

export const handleCheckToken = (user, callback) => {
    const token = user ? decodeToken(user) : '';
    // TODO: check token expired after
    callback(Boolean(token));
};

const helpers = { handleCheckToken };

export default helpers;