import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state of the feature
interface FeatureBState {
  items: any[];
  loading: boolean;
  error: string | null;
  selectedItem: any | null;
}

const initialState: FeatureBState = {
  items: [],
  loading: false,
  error: null,
  selectedItem: null,
};

// Create a slice for featureB
const featureBSlice = createSlice({
  name: 'featureB',
  initialState,
  reducers: {
    fetchItemsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchItemsSuccess(state, action: PayloadAction<any[]>) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchItemsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    selectItem(state, action: PayloadAction<any>) {
      state.selectedItem = action.payload;
    },
    // Add more reducers as needed
  },
});

// Export actions
export const { fetchItemsStart, fetchItemsSuccess, fetchItemsFailure, selectItem } = featureBSlice.actions;

// Export the reducer
export default featureBSlice.reducer;

// Define a thunk for async actions (e.g., API calls)
export const fetchItems = () => async (dispatch: any) => {
  dispatch(fetchItemsStart());
  try {
    const response = await fetch('/api/featureB/items'); // Replace with your API endpoint
    const data = await response.json();
    dispatch(fetchItemsSuccess(data));
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
  }
};

// Optional: Define selectors if needed
export const selectFeatureBItems = (state: any) => state.featureB.items;
export const selectFeatureBLoading = (state: any) => state.featureB.loading;
export const selectFeatureBError = (state: any) => state.featureB.error;
export const selectFeatureBSelectedItem = (state: any) => state.featureB.selectedItem;
