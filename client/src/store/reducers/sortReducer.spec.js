import sortReducer from './sortReducer'

const sort = ['sorting by category'];

describe('sortReducer func', () => {
    it('should return default value', ()=>{
        expect(sortReducer(undefined,{})).toEqual('default')
    })
    
    it('should set sort', ()=> {
        expect(sortReducer(sort, {type: 'SET_SORT', payload: ['name', 'first cheaper', 'expensive', 'weight']})).toEqual(["name", "first cheaper", "expensive", "weight"])
    })
})