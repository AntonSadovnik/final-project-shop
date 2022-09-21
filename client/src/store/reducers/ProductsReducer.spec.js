import ProductsReducer from './ProductsReducer'

const products = ['empty products list'];

describe('ProductsReducer func', () => {
    it('should return default value', ()=>{
        expect(ProductsReducer(undefined,{})).toEqual({"products": []})
    })
    
    it('should set products', ()=> {
        expect(ProductsReducer(products, {type: 'SET_PRODUCTS', payload: ['suchi', 'noodles', 'soup']})).toEqual(
            {
                "0": "suchi",
                "1": "noodles",
                "2": "soup",
            })
    })
})