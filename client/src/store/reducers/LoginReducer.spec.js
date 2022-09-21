import LoginReducer from './LoginReducer'

const login = [''];

describe('LoginReducer func', () => {
    it('should return default value', ()=>{
        expect(LoginReducer(undefined,{})).toEqual(false)
    })
    
    it('should set login', ()=> {
        expect(LoginReducer(login, {type: 'SET_LOGIN', payload: ['Welcome']})).toEqual(true)
    })

    it('should set logout', ()=> {
        expect(LoginReducer(login, {type: 'SET_LOGOUT', payload: ['Good bye']})).toEqual(false)
    })
})