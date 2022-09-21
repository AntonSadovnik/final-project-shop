import CustomerReducer from './CustomerReducer'

describe('CustomerReducer func', ()=> {

    const customer = ['name'];

    it('should return default value', ()=>{
        expect(CustomerReducer(undefined,{})).toEqual(null)
    })

    it('should set customer', ()=> {
        expect(CustomerReducer(customer, {type: 'SET_CUSTOMER', payload: [{surname:'Ruslan', age:'22'}]})).toEqual(
            [{
                "age": "22",
                "surname": "Ruslan",
            }])
    })
})