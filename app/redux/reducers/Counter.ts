import { Action } from "redux";
import { INCREMENT, DECREMENT,RESET } from "../actions/CounterAction";

interface State {
    counter: number;
}

const initialState: State = {
    counter: 0,
}

const CounterReducer = (state: State = initialState, action: { type: string, payload: any }): State => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter +(action?.payload?.by ?? 1)};
        case DECREMENT:
            return { ...state, counter: state.counter - 1 }
        case RESET:
            return {...state,counter:0};
        default:
            return state;

    }

};

export default CounterReducer;