export const addTicket = (ticket) => ({
  type: "ADD_TICKET",
  payload: ticket,
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const addItemStripe = (item) => ({
  type: "ADD_ITEM_STRIPE",
  payload: item,
});

export const addOrUpdateCostumer = (item) => ({
  type: "ADD_OR_UPDATE_COSTUMER",
  payload: item,
});

export const changePaymentMode = (item) => ({
  type: "CHANGE_PAYMENT",
  payload: item,
});

const initialState = {
  shoppingCart: [],
  stripeCart: [],
  costumer: {},
  paymentMethod: "STRIPE",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let isInside = false;
      for (let i = 0; i < state.shoppingCart.length; i++) {
        if (state.shoppingCart[i].price == action.payload.price) {
          isInside = true;
          state.shoppingCart[i].quantity += action.payload.quantity;
        }
      }

      if (!isInside) {
        state.shoppingCart.push(action.payload);
      }

      return {
        ...state,
        shoppingCart: state.shoppingCart,
      };
    case "ADD_ITEM_STRIPE":
      let isInsideS = false;
      for (let i = 0; i < state.stripeCart.length; i++) {
        if (state.stripeCart[i].price == action.payload.price) {
          isInsideS = true;
          state.stripeCart[i].quantity += action.payload.quantity;
        }
      }

      if (!isInsideS) {
        state.stripeCart.push(action.payload);
      }

      return {
        ...state,
        stripeCart: state.stripeCart,
      };

    case "ADD_OR_UPDATE_COSTUMER":
      return {
        ...state,
        costumer: action.payload,
      };

    case "CHANGE_PAYMENT":
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
