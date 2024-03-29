import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import ui from './ui_reducer'
const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: ui
});

export default rootReducer;

