import FilterReducer from './FilterReducer'

const filter = ['category'];

describe('FilterReducer func', () => {
    it('should return default value', ()=>{
        expect(FilterReducer(undefined,{})).toEqual([])
    })
    
    it('should add filter', ()=> {
        expect(FilterReducer(filter, {type: 'ADD_FILTER', payload: ['spicy', 'vegetarian']})).toEqual(['spicy', 'vegetarian'])
    })
})
