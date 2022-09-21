import cartReducer from './cartReducer';

describe('cartReducer func', () => {

    const cart = ['set #1', 'set #2', 'Huge family set'];
    const newSets = ['Testy holiday', 'Kilogramm set', 'Autumn set'];

    it('should return default value', ()=>{
        expect(cartReducer(undefined,{})).toEqual({"cart": {}})
    })
    
    it('should increase quantity to cart', ()=> {
        expect(cartReducer(cart, {type: 'INCREASE_QUANTITY_TO_CART', payload: {novelties: newSets}})).toEqual(
            {
                "0": "set #1",
                "1": "set #2",
                "2": "Huge family set",
                "cart": {"novelties": ["Testy holiday", "Kilogramm set", "Autumn set"]}
            })
    })

    it('should decrease quantity to cart', ()=> {
        expect(cartReducer(cart, {type: 'DECREASE_QUANTITY_TO_CART'})).toEqual(
            {
                "0": "set #1",
                "1": "set #2",
                "2": "Huge family set",
            })
    })
})