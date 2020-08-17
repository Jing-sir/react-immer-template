import * as constants from './constants'
import { produce } from "immer";

const defaultState = {
    app: 'Hello World',
};

export default produce((draftState , action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            draftState.app = action.val;
            break;
        default:
            return defaultState;
    }
}, defaultState);
