import userModel from "../models/userModel.js" ;

// add products to user cart
const addToCart = async (req, res) => {
    try {
        const {userId, itemId, size} = req.body ;

        const userData = await userModel.findById(userId) ;
        let cartData = await userData.cartData ;

        if(cartData[itemId]){
            if(cardData[itemId][size]){
                cartData[itemId][size] += 1 ;
            }else{
                cartData[itemId][size] = 1 ;
            }
        }else{
            cartData[itemId] = {} ;
            cartData[itemId][size] = 1 ;
        }

        await userModel.findByIdAndUpdate(userId, {cartData}) ;
        res.json({success: true, msg: "Item added to cart successfully"}) ;
    } catch (error) {
        console.log(error) ;
        res.json({success: false, msg: error.message}) ;
    }
}

// update user cart
const updateCart = async (req, res) => {

    try {
        const {userId, itemId, size, qunatity } = req.body ;
        const userData = await userModel.findById(userId) ;
        let cartData = await userData.cartData ;

        cartData[itemId][size] = quantity ;

        await userModel.findByIdAndUpdate(userId, {cartData}) ;
        res.json({success: true, msg: "cart Updated successfully"}) ;
    } catch (error) {
        console.log(error) ;
        res.json({success: false, msg: error.message}) ;
        
    }
}

// get user cart
const getUserCart = async (req, res) => {
    try {
        const {userId} = req.body ;
        const userData = await userModel.findById(userId) ;
        let cartData = await userData.cartData ;

        res.json({success :true, cartData})
        
    } catch (error) {
        console.log(error) ;
        res.json({success: false, msg: error.message}) ;
        
    }
}

export { addToCart, updateCart, getUserCart } ;