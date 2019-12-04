import { useReducer, useCallback } from "react";
import axios from "axios";

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...currentHttpState, loading: false, data: action.responseData };
    case "ERROR":
      return { loading: false, error: action.errorMessage }
    case "CLEAR":
      return { ...currentHttpState, error: null}
      default:
        throw new Error('default should not be reached')
  }
}

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null, data: null});

  console.log('useHttp rendering')
  
  // By using useCallback, we avoid unecessary rerender
  const sendRequest = useCallback( async (url) => {
    dispatchHttp({type: 'SEND', data: null})
    
    try {
      const response = await axios.get(url);
      dispatchHttp({type: 'RESPONSE', responseData: response.data})
    } catch (error) {
      dispatchHttp({type: 'ERROR', errorMessage: 'Something went wrong'})
    }
    
  },[]);
  
  const { loading, error, data} = httpState;

  return {
    isLoading: loading,
    error: error,
    data: data,
    sendRequest: sendRequest
  }
}

export default useHttp;