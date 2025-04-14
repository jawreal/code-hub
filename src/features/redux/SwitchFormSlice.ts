import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FORMS_TYPE {
  isSignUp: boolean;
}

const initialState: FORMS_TYPE = {
  isSignUp: false
}

const SwitchFormSlice = createSlice({
  name: "switchForm", 
  initialState, 
  reducers: {
    handleForm: (state, action: PayloadAction<FORMS_TYPE>) => {
      state.isSignUp = action.payload.isSignUp;
    }, 
  }, 
});

export const { handleForm } = SwitchFormSlice.actions;
//.reducer if one reducer and with s if it's many
export default SwitchFormSlice.reducer;