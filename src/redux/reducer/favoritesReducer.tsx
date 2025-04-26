import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EventItem {
  id: number;
  event_name: string;
  event_profile_img: string;
  readable_from_date: string;
  city: string;
  country: string;
  event_price_from: number;
  event_price_to: number;
  keywords: string[];
}

interface FavoritesState {
  favorites: EventItem[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<EventItem>) => {
      // Check if already exists
      const exists = state.favorites.find(item => item.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
