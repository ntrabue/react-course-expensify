import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 1
    }
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid: 1 })
});

test('should set uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'anything' }, action)
    expect(state).toEqual({})
})