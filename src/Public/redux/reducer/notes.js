// src/Public/redux/actions/notes.js
import axios from 'axios';

// Pick ONE of these base URLs:
const BASE_URL = 'http://10.14.5.86:3000';           // Android emulator -> host machine
// const BASE_URL = 'http://192.168.1.23:3000';    // Physical device -> replace with your PC IPv4

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

/* ===================== NOTES ===================== */
export const getNotes = (params) => ({
  type: 'GET_NOTES',
  payload: API.get('/notes', { params }),
});

export const getMoreNotes = (params) => ({
  type: 'GET_MORE_NOTES',
  payload: API.get('/notes', { params }),
});

export const insertNotes = (data) => ({
  type: 'INSERT_NOTES',
  payload: API.post('/notes', data),
});

export const updateNotes = (id, data) => ({
  type: 'UPDATE_NOTES',
  payload: API.put(`/notes/${id}`, data),
});

export const deleteNotes = (id) => ({
  type: 'DELETE_NOTES',
  payload: API.delete(`/notes/${id}`),
});

/* ================== CATEGORIES =================== */
export const getCategories = () => ({
  type: 'GET_CATEGORIES',
  payload: API.get('/categories'),
});

export const insertCategories = (data) => ({
  type: 'INSERT_CATEGORIES',
  payload: API.post('/categories', data),
});

export const deleteCategories = (id) => ({
  type: 'DELETE_CATEGORIES',
  payload: API.delete(`/categories/${id}`),
});
