import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state of the feature
interface FeatureAState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: FeatureAState = {
  data: [],
  loading: false,
  error: null,
};

// Create a slice for featureA
const featureASlice = createSlice({
  name: 'featureA',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more reducers as needed
  },
});

// Export actions
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = featureASlice.actions;

// Export the reducer
export default featureASlice.reducer;

// Define a thunk for async actions (e.g., API calls)
export const fetchData = () => async (dispatch: any) => {
  dispatch(fetchDataStart());
  try {
    const response = await fetch('/api/featureA'); // Replace with your API endpoint
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

// Optional: Define selectors if needed
export const selectFeatureAData = (state: any) => state.featureA.data;
export const selectFeatureALoading = (state: any) => state.featureA.loading;
export const selectFeatureAError = (state: any) => state.featureA.error;
