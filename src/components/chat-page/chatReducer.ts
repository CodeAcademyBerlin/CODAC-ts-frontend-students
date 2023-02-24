import { ComponentChatMessage } from 'cabServer/global/__generated__/types';

interface IMsg {
  user: string;
  msg: string;
  ts: string;
}

const INITIAL_STATE = {
  chatHistory: <ComponentChatMessage[]>[],
  msg: <IMsg>{},
  input: '',
  typing: false,
  loading: true,
  error: null,
};

export const chatReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MESSAGE_HISTORY':
      return {
        ...state,
        chatHistory: action.payload,
      };
    case 'ADD_CHAT_MESSAGE':
      return {
        ...state,
        chatHistory: [...state.chatHistory, action.payload],
      };
    case 'SET_MSG':
      return {
        ...state,
        msg: action.payload,
      };
    case 'SET_INPUT':
      return {
        ...state,
        input: action.payload,
      };
    case 'SET_TYPING':
      return {
        ...state,
        typing: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
