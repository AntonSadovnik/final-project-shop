import cityReducer from './cityReducer';

describe('cityReducer func', () => {

    const location = [''];
    const selectCity = ['Kyiv', 'Kharkiv', 'Odesa'];

    it('should return default value', () => {
        expect(cityReducer(undefined,{})).toEqual('')
    })
    
    it('should set city', () => {
        expect(cityReducer(location, {type: 'SET_CITY', payload: {city: selectCity[1] }})).toEqual('Kharkiv')
    })
})