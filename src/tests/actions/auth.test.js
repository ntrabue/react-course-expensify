import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    login,
    logout,
    startLogin,
    startLogout
} from '../../actions/auth';
import { firebase } from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should generate login action object', () => {
    const uid = 1;
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
});

test('should generate a logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});

test('should run startLogout and return no user', (done) => {
    const store = createMockStore({});
    store.dispatch(startLogout()).then(() => {
        return firebase.auth().onAuthStateChanged((user) => {
            expect(user).toBeFalsy();
            done();
        })
    })
})
